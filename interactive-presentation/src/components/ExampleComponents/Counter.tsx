import { Button, Flex, Grid } from "@chakra-ui/react";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => setValue((v) => v + 1);
  const decrement = () => setValue((v) => v - 1);

  return (
    <Grid templateColumns="1fr 1fr 1fr" w="fit-content" mt="1rem">
      <Button bg="gray.300" onClick={decrement}>
        -
      </Button>
      <Flex align="center" justify="center">
        {value}
      </Flex>
      <Button bg="gray.400" onClick={increment}>
        +
      </Button>
    </Grid>
  );
}
