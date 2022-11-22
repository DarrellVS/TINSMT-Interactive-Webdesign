import { Image, Heading } from "@chakra-ui/react";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function PropPassingPageSix() {
  return (
    <Layout>
      <PageHeading query="componenten">Slimme componenten</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          En zo geef je de data mee
        </Heading>

        <Image
          src="/images/custom-component-creation.png"
          rounded="7.5px"
          mt="1rem"
        />
      </AnimatedPageTransition>
      <FootNote />
    </Layout>
  );
}
