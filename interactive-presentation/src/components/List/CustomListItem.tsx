import { Grid, Text, GridProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function CustomListItem({
  children,
  icon,
  ...rest
}: { children: ReactNode; icon?: ReactNode } & GridProps) {
  return (
    <Grid
      alignItems="center"
      templateColumns="2.5rem 1fr"
      fontSize="2xl"
      color="gray.700"
      {...rest}
    >
      {icon}
      <Text>{children}</Text>
    </Grid>
  );
}
