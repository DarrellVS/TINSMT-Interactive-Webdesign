import { Image, Heading } from "@chakra-ui/react";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function PropPassingPageThree() {
  return (
    <Layout>
      <PageHeading query="componenten">Slimme componenten</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Ongeveer zo
        </Heading>

        <Image src="/images/custom-component-1.png" rounded="7.5px" mt="1rem" />
      </AnimatedPageTransition>
      <FootNote />
    </Layout>
  );
}
