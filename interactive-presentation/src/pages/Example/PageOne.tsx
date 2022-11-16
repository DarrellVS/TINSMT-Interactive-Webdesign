import { Box, Text, Image, Grid, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function ExamplePageOne() {
  return (
    <SlideWrapper>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <PageHeading query="Samen">Nu samen.</PageHeading>

          <Box>
            <Heading mt="1rem" fontSize="2xl">
              Een simpel projectje
            </Heading>
            <Text mt=".5rem">
              Ik wil een counter hebben, waarbij ik kan klikken om de waarde te
              verhogen. Iedere waarde die deelbaar is door twee moet rood
              gekleurd zijn.
            </Text>

            <Box mt="3rem">
              <Heading mt="1rem" fontSize="2xl">
                Hint: bouw eerst de structuur
              </Heading>

              <Image src="/images/example-outline.png" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
}
