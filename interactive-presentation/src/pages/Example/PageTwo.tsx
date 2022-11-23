import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

function Counter() {
  const stateArray = useState(0);
  const [waarde, zetWaarde] = stateArray;

  const increment = () => zetWaarde((w) => w + 1);
  const decrement = () => zetWaarde((w) => w - 1);

  const kleur = waarde % 2 === 0 ? "red" : "gray";

  return (
    <Box>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Text color={kleur}>{waarde}</Text>
    </Box>
  );
}

export default function ExamplePageTwo() {
  return (
    <Layout>
      <PageHeading query="Samen">Nu samen.</PageHeading>

      <AnimatedPageTransition>
        <Counter />
      </AnimatedPageTransition>

      <FootNote />
    </Layout>
  );
}
