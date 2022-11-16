import { Box, Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box maxW="1400px" m="auto">
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1fr" gap="7.5rem">
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
