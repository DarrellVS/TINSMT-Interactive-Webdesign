#include <Arduino.h>
#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <WebSocketsServer.h>
#include <Hash.h>
#include <Servo.h>

ESP8266WiFiMulti WiFiMulti;
Servo servo;

WebSocketsServer webSocket = WebSocketsServer(81);

int rPin = 12;
int gPin = 13;
int bPin = 14;

boolean rLEDState = false;
boolean gLEDState = false;
boolean bLEDState = false;

int servoPos = 0;

float temperature = 20.0;
float humidity = 20.0;
float potValue = 0.0;

void updateClients() {
  String state = getSystemState();
  webSocket.broadcastTXT(state);
}

void updateInternalState() {
  digitalWrite(rPin, rLEDState);
  digitalWrite(gPin, gLEDState);
  digitalWrite(bPin, bLEDState);
}

String getSystemState() {
  StaticJsonDocument<512> doc;

  doc["potentioMeter"] = potValue;
  doc["servo"] = servoPos;
  
  JsonObject LEDStates = doc.createNestedObject("LEDStates");
  LEDStates["red"] = rLEDState;
  LEDStates["green"] = gLEDState;
  LEDStates["blue"] = bLEDState;

  String output;
  serializeJson(doc, output);

  return output;
}

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  switch (type) {
    case WStype_DISCONNECTED:
      Serial.printf("[%u] Disconnected!\n", num);
      break;
    case WStype_CONNECTED:
      {
        IPAddress ip = webSocket.remoteIP(num);
        Serial.printf("[%u] Connected from %d.%d.%d.%d url: %s\n", num, ip[0], ip[1], ip[2], ip[3], payload);

        String state = getSystemState();
        webSocket.sendTXT(num, state);
      }
      break;
    case WStype_TEXT:
      Serial.printf("[%u] get Text: %s\n", num, payload);

      StaticJsonDocument<128> doc;
      DeserializationError error = deserializeJson(doc, payload, length);
      
      if (error) {
        Serial.print(F("deserializeJson() failed: "));
        Serial.println(error.f_str());
        return;
      }
      
      const char* action = doc["action"];

      Serial.println(action);
      
      if(strcmp(action, "setLEDState") == 0) {        
        const char* color = doc["color"];
        bool state = doc["state"];

        if(strcmp(color, "red") == 0) {
          rLEDState = state;  
        }

        if(strcmp(color, "green") == 0) {
          gLEDState = state;  
        }

        if(strcmp(color, "blue") == 0) {
          bLEDState = state;  
        }
      }

      if(strcmp(action, "setServoPos") == 0) {
        const int pos = doc["position"];
        Serial.println(pos);
        if(pos < 0 || pos > 90) return;
        servoPos = pos;
        servo.write(servoPos);
      }
      
      updateInternalState();
      updateClients();
      break;
  }
}

void setup() {
  Serial.begin(115200);

  pinMode(rPin, OUTPUT);
  pinMode(gPin, OUTPUT);
  pinMode(bPin, OUTPUT);
  pinMode(A0, INPUT);
  servo.attach(2);
  servo.write(servoPos);
  updateInternalState();

  Serial.setDebugOutput(true);

  Serial.println();
  Serial.println();
  Serial.println();

  for (uint8_t t = 4; t > 0; t--) {
    Serial.printf("[SETUP] BOOT WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }

  WiFiMulti.addAP("Tesla IoT", "fsL6HgjN");

  while (WiFiMulti.run() != WL_CONNECTED) {
    delay(100);
  }

  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
}

void loop() {
  webSocket.loop();

  if (millis() % 50 == 0) {
    float newPotValue = analogRead(A0);

    if(abs(newPotValue - potValue) > 3) {
      potValue = newPotValue;
      updateClients();
    }
  }
}
