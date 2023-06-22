import { config } from "./../../config";
import { useState } from "react";
import io, { Socket } from "socket.io-client";
import useAuth from "./useAuth";

export interface CurrentUserJwtInfo {
  id: string;
  email: string;
  userType: "student" | "teacher";
}

interface ExpandedSocket extends Socket {
  userInfo: CurrentUserJwtInfo;
}

export const useSockets = async () => {
  const { authStatus, jwt } = useAuth();
  const [socket, setSocket] = useState<ExpandedSocket>();

  const initializeSocket = async () => {
    const newSocket = io(config.backendUrl, {
      query: { jwt },
    }) as ExpandedSocket;
    setSocket(newSocket);

    if (socket) {
      socket.on("connect", () => {
        console.log("connected");
      });
    }
  };

  const initiateTeacherSesssion = () => {
    if (authStatus.endsWith("teacher") && socket) {
      socket.emit("placement");
    } else {
      alert("ERROR: PLACEMENT FOR TEACHER FAILED");
    }
  };
  const placeStudentInClassroom = ({
    classroomId,
    teacherId,
  }: {
    classroomId: string;
    teacherId: string;
  }) => {
    if (authStatus.endsWith("student") && socket) {
      socket.emit("placement", { classroomId, teacherId });
    } else {
      alert("ERROR: PLACEMENT FOR STUDENT FAILED");
    }
  };

  return {
    socket,
    initializeSocket,
    initiateTeacherSesssion,
    placeStudentInClassroom,
  };
};
