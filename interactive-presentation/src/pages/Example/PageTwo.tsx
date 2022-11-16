import { Grid, Heading } from "@chakra-ui/react";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function ExamplePageTwo() {
  return (
    <Layout>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <PageHeading query="Samen">Nu samen.</PageHeading>

          <AnimatedPageTransition>
            <Heading mt="1rem" fontSize="2xl">
              Resultaat
            </Heading>

            {/* Hier de counter! */}
          </AnimatedPageTransition>
        </Grid>
      </Grid>
      <FootNote />
    </Layout>
  );
}
