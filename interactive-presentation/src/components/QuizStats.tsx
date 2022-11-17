import { Flex, Text } from "@chakra-ui/react";
import { useQuiz } from "../context/quizContext";

export default function QuizStats() {
  const { amountOfAnswers, amountConnected } = useQuiz();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      bottom="0"
      left="20rem"
      p="2rem 3rem"
      gap="2.8rem"
    >
      <Text fontWeight="semibold" color="gray.600">
        {amountOfAnswers} {amountOfAnswers === 1 ? "Antwoord" : "Antwoorden"}
      </Text>
      <Text fontWeight="semibold" color="gray.600">
        {amountConnected} Deelnemers
      </Text>
    </Flex>
  );
}
