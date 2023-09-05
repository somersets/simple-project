import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userAuth from "@/redux/api/user/auth";

export function makeStore() {
  return configureStore({
    reducer: {
      [userAuth.reducerPath]: userAuth.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([userAuth.middleware]),
  });
}

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
export { useAppDispatch, useAppSelector };
