import { Box, Text, Image, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function ComponentsPageOne() {
  return (
    <SlideWrapper>
      <PageHeading query="component">
        Hoe maak ik een component aan?
      </PageHeading>

      <Box>
        <Heading mt="1rem" fontSize="2xl">
          Syntax (schrijfwijze)
        </Heading>
        <Text mt=".5rem">
          Een component is een functie die een stukje HTML teruggeeft. De syntax
          wijkt niet veel af van een standaard HTML element.
        </Text>

        <Box mt="3rem">
          <Heading mt="1rem" fontSize="2xl">
            Soorten componenten
          </Heading>

          <Text>
            In de basis heb je twee soorten componenten. Een soort is een
            component welke een of meerdere onderliggende componenten heeft. De
            andere soort is een component welke geen onderliggende componenten
            heeft.
          </Text>

          <Image
            src="/images/voorbeeld verschillende componenttypes.png"
            mt="1rem"
            rounded="7.5px"
          />
        </Box>
      </Box>
    </SlideWrapper>
  );
}
