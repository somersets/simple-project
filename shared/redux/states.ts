import { IInitialStateChat, IInitialStateUser } from "./states-types";

const initialStateUser: IInitialStateUser = {
  user: null,
};

const initialChatState: IInitialStateChat = {
  chat: {
    id: 0,
    messages: [],
    isLoadingMessages: false,
  },
};

const initialAuthState = {
  isAuth: false,
};

export { initialStateUser, initialAuthState, initialChatState };
