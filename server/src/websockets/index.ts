import { PrismaClient } from "@prisma/client";
import { CurrentUserJwtInfo } from "./../auth/types";
import { Server } from "http";
import { verifyConnection } from "./auth";
import { Socket, Server as SocketIOServer } from "socket.io";

interface ExpandedSocket extends Socket {
  userInfo: CurrentUserJwtInfo;
}

const classroomMaps = {};

export default async (prisma: PrismaClient, expressServer: Server) => {
  const io = new SocketIOServer(expressServer, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  io.on("connection", (socket: ExpandedSocket) => {
    io.use(async (socket: any, next) => {
      if (socket.handshake.query && socket.handshake.query) {
        const userInfo = await verifyConnection(
          socket.handshake.query.jwt as string
        );
        socket.userInfo = userInfo;
        console.log("USER CONNECTED: ", userInfo?.email);
        next();
      } else {
        next(new Error("Authentication error"));
      }
    });

    socket.on(
      "placement",
      (msg?: { classroomId: string; teacherId: string }) => {
        const { userInfo } = socket;
        const userId = userInfo?.id;

        if (io.sockets.adapter.rooms[userId] || !userInfo) {
          io.close();
        } else {
          if (userInfo.userType === "student") {
            if (!msg) {
              console.log(
                "A PLACEMENT FOR STUDENT REQUEST WITHOUT INFORMATION"
              );
            } else {
              socket.join(msg.teacherId);

              console.log(io.sockets.adapter.rooms[msg.teacherId]);
            }
          } else if (userInfo.userType === "teacher") {
            socket.join(userId);
            socket.emit("teacher-queue-changed", JSON.stringify([]));
          }
        }
      }
    );
  });
};
