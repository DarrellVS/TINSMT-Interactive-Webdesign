import { Box, Image, Grid, Heading } from "@chakra-ui/react";
import ExampleComponent from "../../components/ExampleComponents/Counter";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function AboutStatesPageOne() {
  return (
    <SlideWrapper>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <PageHeading query="states">
            Ja tof, maar hoe werken die states dan?
          </PageHeading>

          <Box>
            <Heading mt="1rem" fontSize="2xl">
              Voorbeeldje!
            </Heading>
            <ExampleComponent />
            <Image src="/images/counter.png" rounded="7.5px" mt="3rem" />
          </Box>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
}
