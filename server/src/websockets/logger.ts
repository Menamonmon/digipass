import url from "url";
import { WebSocketServer, WebSocket } from "ws";

function heartbeat() {
  this.isAlive = true;
}

interface LoggerWebSocket extends WebSocket {
  isAlive: boolean;
}

export const attachLogger = (wss: WebSocketServer) => {
  wss.on("connection", function connection(ws: LoggerWebSocket, req) {
    const location = url.parse(req.url, true);
    console.log("URL: ", location);
    // You might use location.query.access_token to authenticate or share sessions
    // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

    ws.on("open", function open() {
      console.log("connected");
    });

    ws.on("close", function close() {
      console.log("disconnected");
    });

    ws.on("message", function incoming(message) {
      console.log("received: %s", message);
    });

    ws.isAlive = true;
    ws.on("pong", heartbeat);

    const interval = setInterval(function ping() {
      wss.clients.forEach(function each(ws: LoggerWebSocket) {
        if (ws.isAlive === false) {
          console.log("Stale connection terminating.");
          return ws.terminate();
        }

        ws.isAlive = false;
        ws.ping("", false, (err) => {
          if (err) {
            console.log("PING ERROR: ", err);
          }
        });
      });
    }, 10000);

    console.log("First connected");
    ws.send("{}");
    ws.on("close", () => clearInterval(interval));
  });
};
