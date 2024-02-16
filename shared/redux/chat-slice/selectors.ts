import { AppState } from "@/shared/redux/store";

export const selectChatData = (state: AppState) => state.chatState.chats;
