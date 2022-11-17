import { Box, Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box maxW="1400px" m="auto">
      <Grid
        h="100vh"
        templateColumns="auto"
        alignItems={{ base: "start", md: "center" }}
        p={{ base: "2rem", md: "0" }}
        py={{ base: "5rem", md: "0" }}
      >
        <Grid
          templateColumns={{ base: "auto", md: "1fr 1fr" }}
          gap={{ base: "2rem", md: "7.5rem" }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
