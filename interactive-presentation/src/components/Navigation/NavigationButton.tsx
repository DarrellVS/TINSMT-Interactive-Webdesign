import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function NavigationButton({
  onClick,
  color,
  icon,
}: {
  onClick: () => void;
  color: string;
  icon: ReactNode;
}) {
  return (
    <Button onClick={onClick} bg={color} w="3rem" h="3rem" rounded="7.5px">
      {icon}
    </Button>
  );
}
