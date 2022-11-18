import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Answer, QuizContextType } from "../types/quiz";
import { io } from "socket.io-client";

function unimplementedFunction() {
  throw new Error("Function called before initialization");
}

// Create a context with default values
const QuizContext = createContext<QuizContextType>({
  getAnswer: () => undefined,
  addAnswer: unimplementedFunction,
  useIsAnswered: () => true,
  finishedQuestion: unimplementedFunction,
});

export default function QuizProvider({
  children,
  setCurrentSlide,
}: {
  children: ReactNode;
  setCurrentSlide: (index: number) => void;
}) {
  const [webSocket, setWebSocket] = useState<any>();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [serverAnswers, setServerAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const cachedAnswers = localStorage.getItem("answers");
    if (cachedAnswers) {
      setAnswers(JSON.parse(cachedAnswers));
    }
  }, []);

  useEffect(() => {
    console.log("Connecting to websocket server");
    const socket = io(`https://quizws.darrellvs.nl`);

    socket.on("connect", () => {
      console.log("Connected to websocket server");
      setWebSocket(socket);
    });

    socket.on("syncQuestionIndex", (index: number) => {
      console.log("Received new question index: " + index);
      setCurrentSlide(index);
    });

    socket.on("displayAnswer", (answer: Answer) => {
      console.log("Received new answer: ", answer);
      setServerAnswers((prev) => [...prev, answer]);
    });

    // Close websocket on unmount
    return () => {
      socket.close();
    };
  }, [setCurrentSlide]);

  // Listen for ctrl p keypress
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        console.log("Resetting answers");
        setAnswers([]);
        setServerAnswers([]);
        localStorage.removeItem("answers");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const addAnswer = (answer: Answer) => {
    setAnswers((prev) => [...prev, answer]);
    localStorage.setItem("answers", JSON.stringify([...answers, answer]));
  };

  const useIsAnswered = (questionIndex: number) => {
    return answers.some((answer) => answer.question === questionIndex);
  };

  const getAnswer = (questionIndex: number) => {
    const answer = answers.find((answer) => answer.question === questionIndex);
    const serverAnswer = serverAnswers.find(
      (answer) => answer.question === questionIndex
    );

    return {
      isReady: serverAnswer !== undefined,
      yourAnswer: answer,
      correctAnswer: serverAnswer,
    };
  };

  const finishedQuestion = useCallback(
    (answer: string) => {
      if (!webSocket) return;
      webSocket.emit("finishedQuestion", answer);
    },
    [webSocket]
  );

  return (
    <QuizContext.Provider
      value={{ addAnswer, useIsAnswered, getAnswer, finishedQuestion }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const espContext = useContext(QuizContext);
  return espContext;
};
