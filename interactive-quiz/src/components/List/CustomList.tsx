import { Stack, StackProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function CustomList({
  children,
  ...rest
}: { children: ReactNode | ReactNode[] } & StackProps) {
  return <Stack {...rest}>{children}</Stack>;
}
