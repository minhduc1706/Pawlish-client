import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { socketClient, connectSocket, disconnectSocket } from "../../redux/chat/socket";
import { setMessages, addMessage, setConnected, setRoomId } from "../../redux/chat/chatSlice";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { MessageCircle } from "lucide-react";
import { getCSKHStaffId } from "@/api/staff";

interface ChatProps {
  isOpen: boolean;
  toggleChat: () => void;
}

const Chat: React.FC<ChatProps> = ({ isOpen, toggleChat }) => {
  const dispatch = useAppDispatch();
  const { messages, isConnected, roomId } = useAppSelector((state) => state.chat);
  const [input, setInput] = useState("");
  const [cskhStaffId, setCskhStaffId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCSKHStaffId = async () => {
      const staffId = await getCSKHStaffId();
      console.log("cskhStaffId:", staffId);
      setCskhStaffId(staffId);
    };
    fetchCSKHStaffId();
  }, [dispatch]);

  useEffect(() => {
    if (isOpen && cskhStaffId) {
      connectSocket();

      socketClient.on("connect", () => {
        console.log("Kết nối Socket.IO thành công:", socketClient.id);
        dispatch(setConnected(true));
        socketClient.emit("startChat", { cskhStaffId });
      });

      socketClient.on("chatStarted", (data: { roomId: string; cskhStaffId: string; messages: any[] }) => {
        console.log("Chat bắt đầu:", data);
        dispatch(setRoomId(data.roomId));
        dispatch(setMessages(data.messages));
      });

      socketClient.on("receiveMessage", (message) => {
        dispatch(addMessage(message));
      });

      return () => {
        disconnectSocket();
        socketClient.off("connect");
        socketClient.off("chatStarted");
        socketClient.off("receiveMessage");
      };
    }
  }, [isOpen, cskhStaffId, dispatch]);

  const handleSend = () => {
    if (input.trim() && isConnected && roomId) {
      const messageData = { message: input, receiverId: cskhStaffId };
      socketClient.emit("sendMessage", messageData);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <Button onClick={toggleChat} className="rounded-full bg-blue-600 text-white px-6 py-4">
          <MessageCircle className="h-5 w-5 mr-2" />
          <span>Chat với mình nhé</span>
        </Button>
      )}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-xl border">
          <div className="p-3 bg-blue-600 text-white rounded-t-lg flex justify-between">
            <h3>Chat với CSKH</h3>
            <Button variant="ghost" onClick={toggleChat}>✕</Button>
          </div>
          <ScrollArea className="h-64 p-3">
            {messages.map((msg) => (
              <div
                key={msg._id || `${msg.senderId}-${msg.createdAt}`}
                className={`p-2 mb-2 rounded-lg max-w-[75%] ${
                  msg.senderId === socketClient.id ? "bg-blue-100 ml-auto" : "bg-gray-100 mr-auto"
                }`}
              >
                <p>{msg.message}</p>
                <span className="text-xs text-gray-500">
                  {msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString() : "Just now"}
                </span>
              </div>
            ))}
          </ScrollArea>
          <div className="p-3 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              disabled={!isConnected || !roomId}
            />
            <Button onClick={handleSend} disabled={!isConnected || !roomId}>Gửi</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;