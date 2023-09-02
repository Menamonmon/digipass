import { ReadyState } from "react-use-websocket";
import { JsonValue, WebSocketHook } from "react-use-websocket/dist/lib/types";
import useAuth from "./useAuth";

export const useWebsocketActions = () => {
  const { ws, userType } = useAuth();
  const {
    getWebSocket,
    readyState,
    sendJsonMessage,
    sendMessage,
    lastMessage,
    lastJsonMessage,
  } = ws;
  const websocket = getWebSocket();
  if (readyState === ReadyState.OPEN && websocket !== null) {
    // Teacher actions
    // Will be logged in automatically once their socket is open at the end
    // They can only have one queue per websocket connection and all other connections
    // Action 1: open queue
    // Action 2: close queue
    // Action 3: approve pass
    // Action 4: deny pass

    const teacherPreAction = () => {
      if (userType !== "teacher") {
        throw Error(
          "Trying to perform a real-time action restricted to teachers!"
        );
      }
    };

    const validateClassroomId = (cId: string) => {
      if (
        !/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/.test(
          cId
        )
      )
        throw Error("Invalid classroom id");
    };

    const action = (
      actionName: string,
      content: Record<string, string | JsonValue>
    ) => ({ action: actionName, params: content });

    const actions = {
      openQueueForClassroom: (classroomId: string) => {
        teacherPreAction();
        validateClassroomId(classroomId);
        sendJsonMessage(
          action("create-classroom-queue", { classroomId }),
          true
        );
      },
      closeClassroomQueue: (classroomId: string) => {
        teacherPreAction();
        validateClassroomId(classroomId);
        sendJsonMessage(action("close-classroom-queue", { classroomId }), true);
      },
    };
    return actions;
  } else {
    console.log(
      "A socket connection is required for using useWebsocketActions"
    );
  }
};
