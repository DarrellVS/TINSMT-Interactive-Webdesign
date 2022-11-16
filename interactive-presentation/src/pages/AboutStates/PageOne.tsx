import { Box, Image, Heading } from "@chakra-ui/react";
import ExampleComponent from "../../components/ExampleComponents/Counter";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function AboutStatesPageOne() {
  return (
    <SlideWrapper>
      <PageHeading query="states">
        Ja tof, maar hoe werken die states dan?
      </PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          Voorbeeldje!
        </Heading>
        <ExampleComponent />
        <Image src="/images/counter.png" rounded="7.5px" mt="3rem" />
      </Box>
    </SlideWrapper>
  );
}
