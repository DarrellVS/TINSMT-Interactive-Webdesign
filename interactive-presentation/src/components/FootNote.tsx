import { Box, Text } from "@chakra-ui/react";

export default function FootNote() {
  return (
    <Box position="fixed" bottom="0" left="0" p="2rem 3rem">
      <Text fontWeight="semibold" color="gray.600">
        Darrell van Swinderen
      </Text>
    </Box>
  );
}
