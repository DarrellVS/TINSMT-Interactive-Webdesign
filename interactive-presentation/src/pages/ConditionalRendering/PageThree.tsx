import { Text, Image, Heading, Button } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import FootNote from "../../components/FootNote";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import { useState } from "react";

function InlineConfitionalExample() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOnline(!isOnline)}>Toggle status</Button>
      {isOnline && <Text>Online</Text>}
    </>
  );
}

export default function ConditionalRenderingPageThree() {
  return (
    <Layout>
      <PageHeading query="Conditioneel">Conditioneel renderen</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Inline conditional statement
        </Heading>
        <Text mt=".5rem">
          Render een bepaalde string of element op basis van een conditie.
        </Text>

        <Image
          src="/images/inline-conditional.png"
          rounded="7.5px"
          mt="1rem"
          mb="2rem"
        />

        <InlineConfitionalExample />
      </AnimatedPageTransition>

      <FootNote />
    </Layout>
  );
}
