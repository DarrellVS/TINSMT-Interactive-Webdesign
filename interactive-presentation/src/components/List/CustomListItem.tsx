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
      templateColumns={icon ? "2.5rem 1fr" : "auto"}
      fontSize="2xl"
      color="gray.700"
      {...rest}
    >
      {icon}
      <Text>{children}</Text>
    </Grid>
  );
}
