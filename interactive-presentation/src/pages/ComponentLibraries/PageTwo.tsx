import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function ComponentLibrariesPageTwo() {
  return (
    <Layout>
      <PageHeading query="anderen">
        We laten anderen het werk voor ons doen
      </PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          De code? Bijna hetzelfde!
        </Heading>
        <Box>
          <Image
            mt="1rem"
            src="/images/Text Without Component Libraries.png"
            rounded="7.5px"
          />
          <Image
            mt="1rem"
            src="/images/Text With Component Library.png"
            rounded="7.5px"
          />

          <Box mt="2rem">
            <Link href="https://chakra-ui.com/docs/components" target="_blank">
              <Text
                fontWeight="bold"
                textDecoration="underline"
                color="blue.400"
              >
                Alle Chakra Components
              </Text>
            </Link>
          </Box>
        </Box>
      </AnimatedPageTransition>
      <FootNote />
    </Layout>
  );
}
