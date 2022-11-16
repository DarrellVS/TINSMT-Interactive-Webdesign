import { Box, Text, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function HooksPageTwo() {
  return (
    <SlideWrapper>
      <PageHeading query="hooks">Dat zijn best veel hooks.</PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          En daar houdt het nog niet op
        </Heading>
        <Text mt=".5rem">
          In React kun je ook je eigen hooks maken, welke je vervolgens op
          verschillende plekken kan gebruiken. Zie het als een onzichtbaar
          component.
        </Text>
        <Text mt=".5rem">
          Hooks zijn een stukje code dat uitsluitend gemaakt is om data op te
          halen en / of te verwerken.
        </Text>
      </Box>
    </SlideWrapper>
  );
}
