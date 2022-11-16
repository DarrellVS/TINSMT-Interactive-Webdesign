type LEDS = {
  red: boolean;
  green: boolean;
  blue: boolean;
};

export type LEDColors = keyof LEDS;

export interface ESP {
  potentioMeter?: number;
  temperature?: number;
  humidity?: number;
  LEDStates: {
    [color in LEDColors]: boolean;
  };
}

export type ESPContextType = {
  esp?: ESP;
  setIp: (ip: string) => void;
  setLEDState: (led: LEDColors, state: boolean) => void;
};
