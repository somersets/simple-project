import { useAppDispatch } from "@/shared/redux/store";
import {
  addToMessageHistory,
  restoreChatHistory,
} from "@/shared/redux/chat-slice";
import { Message } from "@/shared/api/chat";
import { IChat } from "@/shared/redux/states-types";

export default function useChatData() {
  const dispatch = useAppDispatch();

  return {
    addToMessageHistory: (message: Message) =>
      dispatch(addToMessageHistory(message)),
    restoreChatHistory: (chat: IChat) =>
      dispatch(restoreChatHistory(chat)),
  };
}
