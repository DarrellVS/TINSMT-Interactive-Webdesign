type LEDS = {
  red: boolean;
  green: boolean;
  blue: boolean;
};

export type LEDColors = keyof LEDS;

export interface ESP {
  potentioMeter: number;
  servo: number;
  LEDStates: {
    [color in LEDColors]: boolean;
  };
}

export type ESPContextType = {
  esp?: ESP;
  ip: string;
  setIp: (ip: string) => void;
  setLEDState: (led: LEDColors, state: boolean) => void;
  setServoPosition: (position: number) => void;
  retryConnection: () => void;
};
