import { Box, Text, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function ApplicationsPageOne() {
  return (
    <SlideWrapper>
      <PageHeading query="kennis">Wat kan ik met deze kennis?</PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          Gebruik het in je eigen projecten!
        </Heading>
        <Text mt=".5rem">
          React is een van de meest populaire frameworks voor het bouwen van
          webapplicaties. Er bestaat veel online ondersteuning en documentatie,
          je kunt dan ook een webapp maken voor jouw smart thing!
        </Text>
      </Box>
    </SlideWrapper>
  );
}
