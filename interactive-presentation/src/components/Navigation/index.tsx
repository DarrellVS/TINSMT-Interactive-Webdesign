import { Flex } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import NavigationButton from "./NavigationButton";

export default function Navigation({
  nextFunc,
  prevFunc,
}: {
  nextFunc: () => void;
  prevFunc: () => void;
}) {
  return (
    <Flex position="fixed" right="3rem" bottom="3rem" gap="1rem">
      <NavigationButton
        color="gray.300"
        onClick={prevFunc}
        icon={<BiChevronLeft />}
      />
      <NavigationButton
        color="gray.300"
        onClick={nextFunc}
        icon={<BiChevronRight />}
      />
    </Flex>
  );
}
