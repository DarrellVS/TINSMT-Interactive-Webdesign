import { useToast } from "@chakra-ui/react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ESP, ESPContextType } from "../types/ESP";

function unimplementedFunction() {
  throw new Error("Function called before initialization");
}

// Create a context with default values
const ESPContext = createContext<ESPContextType>({
  esp: undefined,
  ip: "",
  setIp: unimplementedFunction,
  setLEDState: unimplementedFunction,
  setServoPosition: unimplementedFunction,
  retryConnection: unimplementedFunction,
});

export default function ESPProvider({ children }: { children: ReactNode }) {
  const [esp, setEsp] = useState<ESP>();
  const [ip, setIp] = useState<string>("192.168.178.172");
  const [ws, setWs] = useState<WebSocket>();
  const [trigger, setTrigger] = useState<boolean>(false);
  const toast = useToast();

  // Log when ip changes
  useEffect(() => {
    console.log("Websocket IP has been set to: ", ip);
  }, [ip]);

  // Connect to websocket ip changes
  // Reconnect when ip changes
  useEffect(() => {
    console.log("Connecting to websocket");

    if (trigger) {
      setTrigger(false);
    }

    const ws = new WebSocket(`ws://${ip}:81`);
    ws.onopen = () => {
      console.log("ESP WebSocket opened");
      setWs(ws);
      toast({
        title: "ESP WebSocket opened",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };

    ws.onclose = () => {
      console.log("ESP WebSocket closed");
      setWs(undefined);
      toast({
        title: "ESP WebSocket closed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setEsp(data);
      console.log(data);
    };

    // Close websocket on unmount
    return () => {
      ws.close();
    };
  }, [ip, toast, trigger]);

  const retryConnection = useCallback(() => {
    setTrigger(true);
  }, []);

  // Set LED state on ESP by sending a message to the websocket
  const setLEDState = useCallback(
    (color: string, state: boolean) => {
      if (!ws) throw Error("ESP not connected");
      ws.send(JSON.stringify({ action: "setLEDState", color, state }));
    },
    [ws]
  );

  const setServoPosition = useCallback(
    (position: number) => {
      if (!ws) throw Error("ESP not connected");
      ws.send(JSON.stringify({ action: "setServoPos", position }));
    },
    [ws]
  );

  return (
    <ESPContext.Provider
      value={{ esp, ip, setIp, setLEDState, setServoPosition, retryConnection }}
    >
      {children}
    </ESPContext.Provider>
  );
}

export const useESP = () => {
  const espContext = useContext(ESPContext);
  return espContext;
};
