export type Answer = {
  question: string;
  answer: string;
  options: string[];
};

export type Question = {
  index: number;
  answer: string;
};

export type Quiz = {
  currentQuestion: number;
  amountOfAnswers: number;
  answers: Answer[];
  questions: Question[];
};

export type QuizContextType = {
  quiz?: Quiz;
  amountOfAnswers: number;
  syncQuestionIndex: (index: number) => void;
  displayAnswer: (index: number) => void;
};
