import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage } from "../../interfaces/ChatMessage";

interface ChatState {
  messages: ChatMessage[];
  isConnected: boolean;
  roomId: string | null;
  error: string | null;
}

const initialState: ChatState = {
  messages: [],
  isConnected: false,
  roomId: null,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setRoomId: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload;
    },
    setMessages: (state, action: PayloadAction<ChatMessage[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setConnected, setRoomId, setMessages, addMessage, setError } = chatSlice.actions;
export default chatSlice.reducer;