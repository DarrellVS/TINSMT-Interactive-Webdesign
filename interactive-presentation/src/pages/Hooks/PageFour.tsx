import { Box, Text, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function HooksPageFour() {
  return (
    <SlideWrapper>
      <PageHeading query="verdwijntruc">
        States doen graag de verdwijntruc
      </PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          Unmounting
        </Heading>
        <Text mt=".5rem">
          Wanneer een component unmount, wordt de state van dat component
          verwijderd.
        </Text>
        <Text mt=".5rem">
          Een component unmount wanneer het niet meer in de DOM zit. De DOM is
          de structuur van de pagina, eigenlijk de HTML welke react voor ons
          genereerd.
        </Text>
        <Text mt=".5rem">
          Dit kan problemen veroorzaken wanneer je een state wilt gebruiken in
          een andere component.
        </Text>
      </Box>
    </SlideWrapper>
  );
}
