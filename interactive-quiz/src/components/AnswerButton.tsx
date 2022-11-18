import { Button } from "@chakra-ui/react";
import { useQuiz } from "../context/quizContext";
import { Answer } from "../types/quiz";

export default function AnswerButton({
  children: value,
  onClick,
  isDisabled,
  answer,
}: {
  children: string;
  onClick: () => void;
  isDisabled: boolean;
  answer: {
    isReady: boolean;
    yourAnswer?: Answer;
    correctAnswer?: Answer;
  };
}) {
  const { finishedQuestion } = useQuiz();
  const {
    isReady,
    correctAnswer: { answer: correctAnswer } = { answer: "" },
    yourAnswer: { answer: yourAnswer } = { answer: "" },
  } = answer;

  const colorScheme = !isReady
    ? "blue"
    : value === correctAnswer
    ? "green"
    : value === yourAnswer
    ? "red"
    : "gray";

  return (
    <Button
      onClick={() => {
        if (isReady) return;
        onClick();
        finishedQuestion(value);
      }}
      colorScheme={colorScheme}
      size="lg"
      isDisabled={isDisabled && !isReady}
    >
      {value}
    </Button>
  );
}
