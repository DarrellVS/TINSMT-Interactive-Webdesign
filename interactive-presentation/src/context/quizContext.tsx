import { useToast } from "@chakra-ui/react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { QuizContextType } from "../types/quiz";

function unimplementedFunction() {
  throw new Error("Function called before initialization");
}

// Create a context with default values
const QuizContext = createContext<QuizContextType>({
  amountOfAnswers: 0,
  amountConnected: 0,
  syncQuestionIndex: unimplementedFunction,
  displayAnswer: unimplementedFunction,
});

export default function QuizProvider({ children }: { children: ReactNode }) {
  const [webSocket, setWebSocket] = useState<Socket>();
  const [amountOfAnswers, setAmountOfAnswers] = useState<number>(0);
  const [amountConnected, setAmountConnected] = useState<number>(0);
  const toast = useToast();

  useEffect(() => {
    console.log("Connecting to websocket server");
    const socket = io("https://quizws.darrellvs.nl", {
      query: {
        api_key: "NietDezeKeer",
      },
    });

    socket.on("connect", () => {
      console.log("Connected to websocket server");
      setWebSocket(socket);

      toast({
        title: "Connected to websocket server",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });

    socket.on("syncQuestionIndex", (index: number) => {
      console.log("Received new question index: " + index);
    });

    socket.on("amountOfAnswers", (amount: number) => {
      console.log("Received new amount of answers: " + amount);
      setAmountOfAnswers(amount);
    });

    socket.on("amountConnected", (amount: number) => {
      console.log("Received new amount of connected users: " + amount);
      setAmountConnected(amount);
    });

    // Close websocket on unmount
    return () => {
      socket.close();
    };
  }, [toast]);

  const syncQuestionIndex = useCallback(
    (index: number) => {
      console.log("Syncing slide index");
      if (!webSocket) {
        console.log("No websocket server");
        return;
      }
      webSocket.emit("syncQuestionIndex", index);
    },
    [webSocket]
  );

  const displayAnswer = useCallback(
    (index: number) => {
      console.log("Displaying answer");
      if (!webSocket) {
        console.log("No websocket server");
        return;
      }
      webSocket.emit("displayAnswer", index);
    },
    [webSocket]
  );

  return (
    <QuizContext.Provider
      value={{
        amountOfAnswers,
        amountConnected,
        syncQuestionIndex,
        displayAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const espContext = useContext(QuizContext);
  return espContext;
};
