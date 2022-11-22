import { Box } from "@chakra-ui/react";
import useCurrentSlide from "../hooks/useCurrentSlide";
import { map } from "../utils/constants";

export default function ProgressIndicator() {
  const { currentIndex } = useCurrentSlide();
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      height=".25rem"
      bg="#e4e2e2"
    >
      <Box
        w={`${(currentIndex / (map.length - 1)) * 100}%`}
        h="100%"
        background="#61dafb"
        transition="width .5s ease"
      />
    </Box>
  );
}
