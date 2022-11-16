import { Box, Grid, Heading } from "@chakra-ui/react";
import ExampleList from "../../components/ExampleComponents/ExampleList";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function AboutStatesPageTwo() {
  return (
    <SlideWrapper>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <PageHeading query="getalletje">
            Leuk getalletje, maar daar heb ik niet zo veel aan
          </PageHeading>

          <Box>
            <Heading mt="1rem" fontSize="2xl" mb="2rem">
              Een state kan meer dan alleen een getal zijn
            </Heading>
            <ExampleList />
          </Box>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
}
