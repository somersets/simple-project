import { AppState } from "../store";

export const selectUserData = (state: AppState) => state.userState.user;
