import { ChakraProvider } from "@chakra-ui/react";
import SlidesManager from "./components/SlidesManager";
import ESPProvider from "./context/espContext";
import "./styles.css";
import { theme } from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ESPProvider>
      <SlidesManager />
    </ESPProvider>
  </ChakraProvider>
);
