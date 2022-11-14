import {
  Button,
  ChakraProvider,
  Heading,
  Progress,
  theme,
} from "@chakra-ui/react";
import { useCallback } from "react";
import ESPProvider, { useESPProvider } from "./context/espContext";
import { LEDColors } from "./types/ESP";

function TestElement() {
  const esp = useESPProvider();

  const toggleLEDState = useCallback(
    (color: LEDColors) => {
      if (!esp.esp) return;
      esp.setLEDState(color, !esp.esp.LEDStates.red);
    },
    [esp]
  );

  if (!esp.esp) return <Heading>Not connected</Heading>;
  return (
    <Button onClick={() => toggleLEDState("red")}>
      {esp.esp?.LEDStates.red ? "Red is on" : "Red is off"}
    </Button>
  );
}

function PotentiometerProgress() {
  const esp = useESPProvider();
  if (!esp.esp) return <Heading>Not connected</Heading>;
  return <Progress min={0} max={1023} value={esp.esp.potentioMeter} />;
}

export const App = () => (
  <ChakraProvider theme={theme}>
    <ESPProvider>
      <TestElement />
      <PotentiometerProgress />
    </ESPProvider>
  </ChakraProvider>
);
