import { Box, Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box maxW="1230px" m="auto">
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
