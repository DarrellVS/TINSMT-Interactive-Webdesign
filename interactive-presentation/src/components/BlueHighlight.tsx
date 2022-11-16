import { Highlight } from "@chakra-ui/react";
import React from "react";

export default function BlueHighlight({
  children,
  query,
  css,
}: {
  children: string;
  query: string;
  css?: any;
}) {
  return (
    <Highlight query={query} styles={{ color: "accent.700", ...css }}>
      {children}
    </Highlight>
  );
}
