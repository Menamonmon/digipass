import { Server } from "http";
import WebSocket from "ws";
import { verifyConnection } from "./auth";
import { PrismaClient } from "@prisma/client";
import { attachLogger } from "./logger";

export default (prismaClient: PrismaClient, expressServer: Server) => {
  const wss = new WebSocket.Server({
    noServer: true,
    path: "/websockets",
  });

  attachLogger(wss);

  expressServer.on("upgrade", async (request, socket, head) => {
    const userInfo = await verifyConnection(request);
    if (userInfo) {
      wss.handleUpgrade(request, socket, head, (websocket) => {
        wss.emit("connection", websocket, request);
      });
    } else {
      socket.destroy();
    }
  });
};
