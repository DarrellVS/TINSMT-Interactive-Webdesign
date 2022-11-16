import { Grid, GridProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function CustomListItem({
  children,
  icon,
  ...rest
}: { children: ReactNode; icon?: ReactNode } & GridProps) {
  return (
    <Grid
      alignItems="center"
      templateColumns="2.5rem 1fr"
      fontSize="xl"
      color="gray.700"
      {...rest}
    >
      {icon}
      {children}
    </Grid>
  );
}
