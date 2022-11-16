import { Box, Heading, Image } from "@chakra-ui/react";
import BlueHighlight from "../../components/BlueHighlight";
import SlideWrapper from "../../components/SlideWrapper";

export default function Opening() {
  return (
    <SlideWrapper>
      <Image src="/images/react-icon.png" maxW="20rem" justifySelf="end" />
      <Box>
        <Heading size="3xl">
          <BlueHighlight query="React">
            Interactive React Development
          </BlueHighlight>
        </Heading>
        <Heading size="xl" fontWeight="500" color="gray.600" mt="3rem">
          De basis van react
        </Heading>
      </Box>
    </SlideWrapper>
  );
}
