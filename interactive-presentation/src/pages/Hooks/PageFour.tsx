import { Box, Text, Grid, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function HooksPageFour() {
  return (
    <SlideWrapper>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <PageHeading query="verdwijntruc">
            States doen graag de verdwijntruc
          </PageHeading>

          <Box>
            <Heading mt="1rem" fontSize="2xl">
              Unmounting
            </Heading>
            <Text mt=".5rem">
              Wanneer een component unmount, wordt de state van dat component
              verwijderd.
            </Text>
            <Text mt=".5rem">
              Een component unmount wanneer het niet meer in de DOM zit. De DOM
              is de structuur van de pagina, eigenlijk de HTML welke react voor
              ons genereerd.
            </Text>
            <Text mt=".5rem">
              Dit kan problemen veroorzaken wanneer je een state wilt gebruiken
              in een andere component.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
}
