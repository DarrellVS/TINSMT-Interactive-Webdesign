import { Box, Text, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function ConditionalRenderingPageOne() {
  return (
    <SlideWrapper>
      <PageHeading query="Conditioneel">Conditioneel renderen</PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          Inline if statement
        </Heading>
        <Text mt=".5rem">
          Render een van de twee bepaalde strings of elementen op basis van een
          conditie.
        </Text>

        <Heading mt="3rem" size="2xl">
          Inline conditional statement
        </Heading>
        <Text mt=".5rem">
          Render een bepaalde string of element op basis van een conditie.
        </Text>
      </Box>
    </SlideWrapper>
  );
}
