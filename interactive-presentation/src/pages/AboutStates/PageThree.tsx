import { Box, Image } from "@chakra-ui/react";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function AboutStatesPageThree() {
  return (
    <Layout>
      <PageHeading query="getalletje">
        Leuk getalletje, maar daar heb ik niet zo veel aan
      </PageHeading>

      <AnimatedPageTransition>
        <Box>
          <Image src="/images/Example List.png" rounded="7.5px" />
        </Box>
      </AnimatedPageTransition>

      <FootNote />
    </Layout>
  );
}
