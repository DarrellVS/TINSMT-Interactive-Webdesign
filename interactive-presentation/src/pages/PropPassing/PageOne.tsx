import { Box, Text, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function PropPassingPageOne() {
  return (
    <SlideWrapper>
      <PageHeading query="componenten">Slimme componenten</PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          Prop passing
        </Heading>
        <Text mt=".5rem">
          React-componenten gebruiken <i>props</i> om met elkaar te
          communiceren. Elk bovenliggende component kan informatie doorgeven aan
          de onderliggende componenten door ze <i>props</i> te geven.
        </Text>
      </Box>
    </SlideWrapper>
  );
}
