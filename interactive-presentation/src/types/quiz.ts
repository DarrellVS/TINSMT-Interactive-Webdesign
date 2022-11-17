export type Answer = {
  question: string;
  answer: string;
  options: string[];
};

export type Question = {
  index: number;
  answer: string;
};

export type QuizContextType = {
  amountOfAnswers: number;
  amountConnected: number;
  syncQuestionIndex: (index: number) => void;
  displayAnswer: (index: number) => void;
};
