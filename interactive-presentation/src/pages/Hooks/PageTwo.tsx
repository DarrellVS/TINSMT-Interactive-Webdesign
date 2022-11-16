import { Box, Text, Grid, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function HooksPageTwo() {
  return (
    <SlideWrapper>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <PageHeading query="hooks">Dat zijn best veel hooks.</PageHeading>

          <Box>
            <Heading mt="1rem" fontSize="2xl">
              En daar houdt het nog niet op
            </Heading>
            <Text mt=".5rem">
              In React kun je ook je eigen hooks maken, welke je vervolgens op
              verschillende plekken kan gebruiken. Zie het als een onzichtbaar
              component.
            </Text>
            <Text mt=".5rem">
              Hooks zijn een stukje code dat uitsluitend gemaakt is om data op
              te halen en / of te verwerken.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
}
