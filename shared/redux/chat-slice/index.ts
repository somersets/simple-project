import { createSlice } from "@reduxjs/toolkit";
import { initialChatState } from "@/shared/redux/states";

export const chatSlice = createSlice({
  name: "Chat",
  initialState: initialChatState,
  reducers: {
    restoreChatHistory(state, action) {
      state.chats.push(action.payload);
    },
    addToMessageHistory(state, action) {
      const foundChat = state.chats.find(
        (chat) => chat.id === action.payload.id,
      );
      if (foundChat) {
        foundChat.messages.push(action.payload);
      }
    },
  },
});

export const { restoreChatHistory, addToMessageHistory } = chatSlice.actions;

export default chatSlice.reducer;
