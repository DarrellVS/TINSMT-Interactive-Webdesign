import { Box, Text, Image, Heading } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function StructurePageOne() {
  return (
    <SlideWrapper>
      <PageHeading query="lijkt">
        Maar het lijkt er nog wel een beetje op!
      </PageHeading>

      <Box>
        <Heading mt="1rem" fontSize="2xl">
          Structuur
        </Heading>
        <Text mt=".5rem" mb="3rem">
          React kan geschreven worden in een HTML-achtige structuur. Het kan
          zelfs gebruikt worden met exact dezelfde syntax als HTML.
        </Text>

        <div>
          <h1>Dit is geschreven met standaard HTML tags!</h1>
          <p>Maar zoals je ziet kan de styling nog wel wat werk gebruiken</p>
        </div>

        <Image src="/images/html tags.png" rounded="7.5px" mt="1rem" />
      </Box>
    </SlideWrapper>
  );
}
