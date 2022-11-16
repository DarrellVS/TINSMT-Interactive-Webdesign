import { Box, Heading, Image } from "@chakra-ui/react";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function Opening() {
  return (
    <SlideWrapper>
      <Box alignSelf="center">
        <PageHeading query="reactive">Reactive Web Development</PageHeading>
        <Heading size="xl" fontWeight="500" color="gray.600" mt="3rem">
          De basis van react
        </Heading>
      </Box>
      <Image src="/images/react-icon.png" maxW="20rem" justifySelf="center" />
    </SlideWrapper>
  );
}
