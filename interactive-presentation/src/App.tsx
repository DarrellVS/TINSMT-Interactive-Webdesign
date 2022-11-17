import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./components/AuthProvider";
import SlidesManager from "./components/SlidesManager";
import ESPProvider from "./context/espContext";
import QuizProvider from "./context/quizContext";
import "./styles.css";
import { theme } from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <ESPProvider>
        <QuizProvider>
          <SlidesManager />
        </QuizProvider>
      </ESPProvider>
    </AuthProvider>
  </ChakraProvider>
);
