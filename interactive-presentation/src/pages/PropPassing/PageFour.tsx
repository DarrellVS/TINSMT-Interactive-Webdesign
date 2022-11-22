import { Image, Heading } from "@chakra-ui/react";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function PropPassingPageFour() {
  return (
    <Layout>
      <PageHeading query="componenten">Slimme componenten</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Of zo
        </Heading>

        <Image src="/images/custom-component-2.png" rounded="7.5px" mt="1rem" />
      </AnimatedPageTransition>
      <FootNote />
    </Layout>
  );
}
