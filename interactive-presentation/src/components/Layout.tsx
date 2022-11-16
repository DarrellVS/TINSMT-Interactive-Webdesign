import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box maxW="1230px" m="auto">
      {children}
    </Box>
  );
}
