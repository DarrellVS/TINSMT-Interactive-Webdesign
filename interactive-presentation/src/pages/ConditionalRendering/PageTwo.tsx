import { Text, Image, Heading, Button } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import FootNote from "../../components/FootNote";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import { useState } from "react";

function InlineIfExample() {
  const [isOnline, setIsOnline] = useState(false);
  const status = isOnline ? "Online" : "Offline";

  return (
    <Button onClick={() => setIsOnline(!isOnline)}>Status: {status}</Button>
  );
}

export default function ConditionalRenderingPageTwo() {
  return (
    <Layout>
      <PageHeading query="Conditioneel">Conditioneel renderen</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Inline if statement
        </Heading>
        <Text mt=".5rem">
          Render een van de twee bepaalde strings of elementen op basis van een
          conditie.
        </Text>

        <Image
          src="/images/inline-if-string.png"
          rounded="7.5px"
          mt="1rem"
          mb="2rem"
        />

        <InlineIfExample />
      </AnimatedPageTransition>

      <FootNote />
    </Layout>
  );
}
