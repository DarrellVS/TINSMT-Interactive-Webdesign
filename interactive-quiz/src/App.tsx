import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import QuizProvider from "./context/quizContext";
import QuizPageFive from "./pages/Quiz/PageFive";
import QuizPageFour from "./pages/Quiz/PageFour";
import QuizPageOne from "./pages/Quiz/PageOne";
import QuizPageThree from "./pages/Quiz/PageThree";
import QuizPageTwo from "./pages/Quiz/PageTwo";
import "./styles.css";
import { theme } from "./theme";

export const App = () => {
  const map = [
    <QuizPageOne />,
    <QuizPageTwo />,
    <QuizPageThree />,
    <QuizPageFour />,
    <QuizPageFive />,
  ];
  const [currentIndex, setCurrentSlide] = useState(0);

  console.log(currentIndex);

  return (
    <ChakraProvider theme={theme}>
      <QuizProvider setCurrentSlide={setCurrentSlide}>
        {map[currentIndex]}
      </QuizProvider>
    </ChakraProvider>
  );
};
