import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import BlueHighlight from "../../components/BlueHighlight";
import SlideWrapper from "../../components/SlideWrapper";

export default function Opening() {
  return (
    <SlideWrapper>
      <Grid
        templateColumns="1fr 1.25fr"
        alignItems="center"
        h="100vh"
        gap="10rem"
      >
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
      </Grid>
    </SlideWrapper>
  );
}
