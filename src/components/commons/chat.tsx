import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { socketClient, connectSocket, disconnectSocket } from "../../redux/chat/socket";
import { setMessages, addMessage, setConnected, setRoomId, setCskhStaffId, setError } from "../../redux/chat/chatSlice";
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
  const { messages, isConnected, roomId, cskhStaffId } = useAppSelector((state) => state.chat);
  const [input, setInput] = useState("");
  const [isLoadingStaffId, setIsLoadingStaffId] = useState(false);

  // Lấy CSKH Staff ID và kết nối Socket.IO khi component mount
  useEffect(() => {
    const fetchCSKHStaffId = async () => {
      setIsLoadingStaffId(true);
      try {
        const staffId = await getCSKHStaffId();
        console.log("cskhStaffId:", staffId);
        dispatch(setCskhStaffId(staffId));
      } catch (error) {
        console.error("Error fetching CSKH staff ID:", error);
        dispatch(setError("Không thể kết nối với CSKH"));
      } finally {
        setIsLoadingStaffId(false);
      }
    };

    connectSocket(); // Kết nối Socket.IO ngay khi component mount

    socketClient.on("connect", () => {
      console.log("Kết nối Socket.IO thành công:", socketClient.id);
      dispatch(setConnected(true));
      if (cskhStaffId) {
        socketClient.emit("startChat", { cskhStaffId });
      }
    });

    socketClient.on("chatStarted", (data: { roomId: string; cskhStaffId: string; messages: any[] }) => {
      console.log("Chat bắt đầu:", data);
      dispatch(setRoomId(data.roomId));
      dispatch(setMessages(data.messages));
      dispatch(setError(null));
    });

    socketClient.on("receiveMessage", (message) => {
      console.log("Guest received message:", message);
      dispatch(addMessage(message));
    });

    socketClient.on("noStaffAvailable", (data: { message: string }) => {
      console.log(data.message);
    });

    socketClient.on("chatEnded", () => {
      console.log("Staff disconnected");
    });

    fetchCSKHStaffId();

    return () => {
      // Chỉ ngắt kết nối khi component unmount hoàn toàn
      disconnectSocket();
      socketClient.off("connect");
      socketClient.off("chatStarted");
      socketClient.off("receiveMessage");
      socketClient.off("noStaffAvailable");
      socketClient.off("chatEnded");
    };
  }, [dispatch, cskhStaffId]);

  // Chỉ khởi động chat khi isOpen và có cskhStaffId
  useEffect(() => {
    if (isOpen && cskhStaffId && isConnected && !roomId) {
      socketClient.emit("startChat", { cskhStaffId });
    }
  }, [isOpen, cskhStaffId, isConnected, roomId]);

  const handleSend = () => {
    if (input.trim() && isConnected && roomId && cskhStaffId) {
      const messageData = { message: input, receiverId: cskhStaffId };
      socketClient.emit("sendMessage", messageData);
      setInput("");
      console.log("Guest sent message:", messageData);
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
            {isLoadingStaffId ? (
              <p className="text-center text-gray-500">Đang tải...</p>
            ) : messages.length > 0 ? (
              messages.map((msg) => (
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
              ))
            ) : (
              <p className="text-center text-gray-500">Chưa có tin nhắn nào</p>
            )}
          </ScrollArea>
          <div className="p-3 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              disabled={!isConnected || !roomId || isLoadingStaffId}
            />
            <Button onClick={handleSend} disabled={!isConnected || !roomId || isLoadingStaffId}>
              Gửi
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;