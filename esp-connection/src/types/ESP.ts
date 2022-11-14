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

export type ESPAction =
  | { type: "setPotentiometer"; payload: number }
  | { type: "setTemperature"; payload: number }
  | {
      type: "setLEDState";
      payload: {
        led: LEDColors;
        state: boolean;
      };
    };

export type ESPContextType = [ESP, React.Dispatch<ESPAction>];