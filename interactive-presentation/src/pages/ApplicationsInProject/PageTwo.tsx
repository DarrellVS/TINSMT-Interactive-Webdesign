import { Heading } from "@chakra-ui/react";
import ESPReflector from "../../components/ExampleComponents/ESPReflector";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function ApplicationsPageTwo() {
  return (
    <Layout>
      <PageHeading query="kennis">Wat kan ik met deze kennis?</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" fontSize="2xl">
          Koppelen aan hardware
        </Heading>
        <ESPReflector mt="2rem" />
      </AnimatedPageTransition>

      <FootNote />
    </Layout>
  );
}
