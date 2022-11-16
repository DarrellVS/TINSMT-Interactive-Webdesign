import { Box, Text, Heading } from "@chakra-ui/react";
import BlueHighlight from "../../components/BlueHighlight";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function DifferencesPageTwo() {
  return (
    <SlideWrapper>
      <PageHeading query="verschillen">
        Even terug naar de verschillen
      </PageHeading>

      <Box>
        <Heading mt="1rem" fontSize="2xl">
          Stateful Development
        </Heading>
        <Text mt=".5rem">
          <BlueHighlight query="states" css={{ fontWeight: "bold" }}>
            React is gebaseerd op states.
          </BlueHighlight>{" "}
          Een state is een waarde die bij een bepaald component hoort.
        </Text>
        <Text mt=".5rem">
          Wanneer deze state verandert, rendert React het component opnieuw.
        </Text>
      </Box>
    </SlideWrapper>
  );
}
