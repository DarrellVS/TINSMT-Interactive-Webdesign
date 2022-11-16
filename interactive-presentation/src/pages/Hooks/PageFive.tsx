import { Box, Grid } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function HooksPageFive() {
  return (
    <Layout>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <PageHeading query="verdwijntruc">
            States doen graag de verdwijntruc
          </PageHeading>

          <AnimatedPageTransition>
            <Box boxShadow="-5px 5px 20px rgba(0, 0, 0, 0.25)">
              <ReactPlayer
                url="https://streamable.com/staukb"
                playing={true}
                loop
              />
            </Box>
          </AnimatedPageTransition>
        </Grid>
      </Grid>
      <FootNote />
    </Layout>
  );
}
