import {
  Box,
  BoxProps,
  Button,
  Grid,
  Input,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useESP } from "../../context/espContext";
import { LEDColors } from "../../types/ESP";

function LED({ color }: { color: LEDColors }) {
  const { esp, setLEDState } = useESP();

  return (
    <Box
      bg={color}
      rounded="50vh"
      onClick={() => setLEDState(color, !esp?.LEDStates[color])}
      filter={esp?.LEDStates[color] ? "brightness(100%)" : "brightness(40%)"}
    ></Box>
  );
}

export default function ESPReflector({ ...rest }: BoxProps) {
  const esp = useESP();
  const [ip, setIp] = useState(esp.ip);

  const submitIp = () => {
    esp.setIp(ip);
  };

  const onSliderChange = (value: number) => {
    esp.setServoPosition(value);
  };

  // Laat een bericht zien wanneer de ESP niet verbonden is
  if (!esp.esp) {
    return (
      <>
        <Text mt=".5rem">Geen ESP verbonden</Text>
        <Grid templateColumns="3fr 1fr" gap="1rem" mt=".5rem">
          <Input
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitIp()}
          />
          {esp.ip === ip ? (
            <Button colorScheme="blue" onClick={esp.retryConnection}>
              Retry
            </Button>
          ) : (
            <Button colorScheme="blue" onClick={submitIp}>
              Submit
            </Button>
          )}
        </Grid>
      </>
    );
  }

  // Return de LED & potentiometer states
  return (
    <Box {...rest}>
      <Grid templateColumns="2rem 2rem 2rem" h="2rem" gap="1rem">
        {Object.keys(esp.esp.LEDStates).map((color) => (
          <LED key={color} color={color as LEDColors} />
        ))}
      </Grid>

      <Slider
        aria-label="slider-ex-1"
        defaultValue={esp.esp.servo}
        onChangeEnd={onSliderChange}
        min={0}
        max={90}
        mt="2rem"
      >
        <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
          0deg
        </SliderMark>
        <SliderMark value={45} mt="1" ml="-2.5" fontSize="sm">
          45deg
        </SliderMark>
        <SliderMark value={90} mt="1" ml="-2.5" fontSize="sm">
          90deg
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg="#61dafb" />
        </SliderTrack>
        <SliderThumb bg="#61dafb" />
      </Slider>

      <Progress min={1} max={1023} value={esp.esp.potentioMeter} mt="3rem" />
    </Box>
  );
}
