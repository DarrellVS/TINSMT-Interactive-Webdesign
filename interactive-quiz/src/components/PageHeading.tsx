import { Box, Heading } from "@chakra-ui/react";
import BlueHighlight from "./BlueHighlight";

export default function PageHeading({
  children,
  query,
}: {
  children: string;
  query: string;
}) {
  return (
    <Box alignSelf="center">
      <Heading size="4xl">
        <BlueHighlight query={query}>{children}</BlueHighlight>
      </Heading>
    </Box>
  );
}
