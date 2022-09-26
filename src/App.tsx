import { ChakraProvider, theme, Flex, Button, Slider, SliderTrack, SliderFilledTrack } from "@chakra-ui/react";
import useESP from "./hooks/useESP";
import { LEDColors } from "./types/ESP";

function Buttons() {
  const { esp, setLEDState } = useESP();

  return (
    <Flex>
      {Object.keys(esp.LEDStates).map((ledColor) => (
        <Button
          key={ledColor}
          onClick={() => {
            setLEDState(ledColor, !esp.LEDStates[ledColor as LEDColors]);
          }}
        >
          {esp.LEDStates?.[ledColor as LEDColors] ? "on" : "off"}
        </Button>
      ))}
    </Flex>
  );
}

function PotValue() {
  const { esp } = useESP();

  return (
    <Slider aria-label="slider-ex-1" value={esp.potentioMeter} min={0} max={1024} step={1}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
    </Slider>
  );
}

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Buttons />
      <PotValue />
    </ChakraProvider>
  );
}
