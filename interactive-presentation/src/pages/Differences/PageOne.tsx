import { Box, Text, Grid, Heading } from "@chakra-ui/react";
import ExampleComponent from "../../components/ExampleComponents/Counter";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function DifferencesPageOne() {
  return (
    <SlideWrapper>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <PageHeading query="html">
            Wat maakt React anders dan HTML?
          </PageHeading>

          <Box>
            <Heading mt="1rem" fontSize="2xl">
              Custom Components
            </Heading>
            <Text mt=".5rem">
              React wordt geleverd met JSX, wat het mogelijk maakt om je eigen
              componenten te schrijven. De naam van een custom component{" "}
              <b>moet</b> beginnen met een hoofdletter.
            </Text>

            <Box position="relative" mt="3rem">
              <Heading fontSize="2xl">Herbruikbare code</Heading>
              <Box
                position="absolute"
                _after={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,1) 90%, rgba(255,255,255,1) 100%);",
                  pointerEvents: "none",
                }}
              >
                {Array.from(Array(8)).map((x, i) => (
                  <ExampleComponent key={i} />
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
}
