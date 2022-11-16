import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function ComponentLibrariesPageOne() {
  return (
    <SlideWrapper>
      <PageHeading query="anderen">
        We laten anderen het werk voor ons doen
      </PageHeading>

      <Box>
        <Heading mt="1rem" fontSize="2xl">
          Component libraries
        </Heading>
        <Text mt=".5rem">
          Een van de dingen die React zo populair maakt is de grote hoeveelheid
          component libraries die beschikbaar zijn.
        </Text>

        <Text mt=".5rem" mb="1.5rem">
          Deze component libraries bevatten vaak al veel van de componenten die
          je nodig hebt om een website te bouwen.
        </Text>

        <Divider mb="1.5rem" borderColor="gray.400" />

        <div>
          <h1>Dit is geschreven met standaard HTML tags!</h1>
          <p>Hier zijn dan ook geen component libraries gebruikt</p>
        </div>

        <Box mt="2rem">
          <Heading size="lg">
            Dit is geschreven met een component library!
          </Heading>
          <Text>
            Hier is een component library gebruikt om de styling te verbeteren,
            thanks Chakra UI!
          </Text>
        </Box>
      </Box>
    </SlideWrapper>
  );
}
