import { ChatMessage } from "../../interfaces/ChatMessage";

export interface ChatState {
  messages: ChatMessage[];
  isConnected: boolean;
  roomId: string | null;
  cskhStaffId: string | null;
  error: string | null;
}