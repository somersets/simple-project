import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userAuthApi from "@/shared/api/auth";
import userApi from "@/shared/api/user";
import userReducer from "./user-slice";
import chatReducer from "./chat-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userPhotoApi from "@/shared/api/userPhoto";
import { chatApi } from "@/shared/api/chat";

export function makeStore() {
  return configureStore({
    reducer: {
      [userAuthApi.reducerPath]: userAuthApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [userPhotoApi.reducerPath]: userPhotoApi.reducer,
      [chatApi.reducerPath]: chatApi.reducer,
      userState: userReducer,
      chatState: chatReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        userApi.middleware,
        userAuthApi.middleware,
        userPhotoApi.middleware,
        chatApi.middleware,
      ]),
  });
}

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
export { useAppDispatch, useAppSelector };
