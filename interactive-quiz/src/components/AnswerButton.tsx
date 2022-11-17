import { Button } from "@chakra-ui/react";
import { Answer } from "../types/quiz";

export default function AnswerButton({
  children,
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
  const { isReady, correctAnswer: { answer: correctAnswer } = { answer: "" } } =
    answer;

  const colorScheme = !isReady
    ? "blue"
    : children === correctAnswer
    ? "green"
    : "red";

  return (
    <Button
      onClick={() => {
        if (!isReady) onClick();
      }}
      colorScheme={colorScheme}
      size="lg"
      isDisabled={isDisabled && !isReady}
    >
      {children}
    </Button>
  );
}
