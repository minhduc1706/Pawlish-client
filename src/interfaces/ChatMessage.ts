export interface ChatMessage {
  _id?: string;
  senderId: string;
  receiverId: string;
  message: string;
  image?: string;
  isRead: boolean;
  createdAt?: string;
}
