import useWebSocket from "react-use-websocket";
import { genWsUrl } from "../services/ws";

export const useWs = () => {
  return useWebSocket(genWsUrl());
};
