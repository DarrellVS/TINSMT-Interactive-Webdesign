import { Box, Heading } from "@chakra-ui/react";
import ExampleList from "../../components/ExampleComponents/ExampleList";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function AboutStatesPageTwo() {
  return (
    <SlideWrapper>
      <PageHeading query="getalletje">
        Leuk getalletje, maar daar heb ik niet zo veel aan
      </PageHeading>

      <Box>
        <Heading mt="1rem" fontSize="2xl" mb="2rem">
          Een state kan meer dan alleen een getal zijn
        </Heading>
        <ExampleList />
      </Box>
    </SlideWrapper>
  );
}
