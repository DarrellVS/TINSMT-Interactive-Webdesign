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

const ESPContext = createContext<ESPContextType>({
  esp: undefined,
  setLEDState: unimplementedFunction,
});

export default function ESPProvider({ children }: { children: ReactNode }) {
  const [esp, setEsp] = useState<ESP>();
  const [ws, setWs] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.178.172:81");
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
      console.log(data);
    };

    return () => {
      ws.close();
    };
  }, []);

  const setLEDState = useCallback(
    (color: string, state: boolean) => {
      if (!ws) throw Error("ESP not connected");
      ws.send(JSON.stringify({ action: "setLEDState", color, state }));
    },
    [ws]
  );

  return (
    <ESPContext.Provider value={{ esp, setLEDState }}>
      {children}
    </ESPContext.Provider>
  );
}

export const useESPProvider = () => {
  const espContext = useContext(ESPContext);
  return espContext;
};
