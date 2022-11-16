import { ChakraProvider } from "@chakra-ui/react";
import SlidesManager from "./components/SlidesManager";
import ESPProvider from "./context/espContext";
import { theme } from "./theme";
import "./styles.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ESPProvider>
      <SlidesManager />
    </ESPProvider>
  </ChakraProvider>
);
