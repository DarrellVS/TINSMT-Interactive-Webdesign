import { useCallback, useEffect, useState } from "react";
import { ESP } from "../types/ESP";

const defaultESP = {
  potentioMeter: undefined,
  temperature: undefined,
  LEDStates: {
    red: false,
    green: false,
    blue: false,
  },
};

export default function useESP() {
  const [esp, setEsp] = useState<ESP>(defaultESP);
  const [ws, setWs] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.178.171:81");
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
      if (!ws) return;
      ws.send(JSON.stringify({ action: "setLEDState", color, state }));
    },
    [ws]
  );

  return { esp, setLEDState };
}
