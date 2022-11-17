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
      templateColumns="3rem 1fr"
      fontSize="2xl"
      color="gray.700"
      gap="1rem"
      {...rest}
    >
      {icon}
      <Text>{children}</Text>
    </Grid>
  );
}
