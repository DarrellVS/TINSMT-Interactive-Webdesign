export type Answer = {
  question: number;
  answer: string;
};

export type Question = {
  index: number;
  answer: string;
};

export type QuizContextType = {
  getAnswer: (question: number) =>
    | {
        isReady: boolean;
        yourAnswer?: Answer;
        correctAnswer?: Answer;
      }
    | undefined;
  addAnswer: (answer: Answer) => void;
  useIsAnswered: (question: number) => boolean;
  finishedQuestion: (answer: string) => void;
};
