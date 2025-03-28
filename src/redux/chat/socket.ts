import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:4000";
console.log("SOCKET_URL:", SOCKET_URL);

export const socketClient: Socket = io(SOCKET_URL, {
  path: "/socket.io",
  transports: ["websocket"],
  autoConnect: false,
});

socketClient.on("connect_error", (err) => {
  console.error("Socket.IO connect error:", err.message);
});

socketClient.on("connect", () => {
  console.log("Socket.IO connected:", socketClient.id);
});

export const connectSocket = () => {
  if (!socketClient.connected) {
    console.log("Đang kết nối Socket.IO...");
    socketClient.connect();
  }
};

export const disconnectSocket = () => {
  if (socketClient.connected) {
    socketClient.disconnect();
  }
};