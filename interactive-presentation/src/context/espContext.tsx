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
  setIp: unimplementedFunction,
  setLEDState: unimplementedFunction,
});

export default function ESPProvider({ children }: { children: ReactNode }) {
  const [esp, setEsp] = useState<ESP>();
  const [ip, setIp] = useState<string>("192.168.178.172");
  const [ws, setWs] = useState<WebSocket>();

  // Log when ip changes
  useEffect(() => {
    console.log("Websocket IP has been set to: ", ip);
  }, [ip]);

  // Connect to websocket ip changes
  // Reconnect when ip changes
  useEffect(() => {
    const ws = new WebSocket(`ws://${ip}:81`);
    ws.onopen = () => {
      console.log("ws opened");
      setWs(ws);
    };

    ws.onclose = () => {
      console.log("ws closed");
      setWs(undefined);
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setEsp(data);
      console.log("ESP Message", data);
    };

    // Close websocket on unmount
    return () => {
      ws.close();
    };
  }, [ip]);

  // Set LED state on ESP by sending a message to the websocket
  const setLEDState = useCallback(
    (color: string, state: boolean) => {
      if (!ws) throw Error("ESP not connected");
      ws.send(JSON.stringify({ action: "setLEDState", color, state }));
    },
    [ws]
  );

  return (
    <ESPContext.Provider value={{ esp, setIp, setLEDState }}>
      {children}
    </ESPContext.Provider>
  );
}

export const useESP = () => {
  const espContext = useContext(ESPContext);
  return espContext;
};
