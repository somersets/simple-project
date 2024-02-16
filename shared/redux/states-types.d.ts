import { IUser } from "../types/user";
import { Message } from "@/shared/api/chat";

interface IInitialStateUser {
  user: IUser | null;
}
interface IInitialStateChat {
  chats: IChat[];
}

export interface IChat {
  id: number;
  messages: Message[];
  isLoadingMessages: boolean;
}
