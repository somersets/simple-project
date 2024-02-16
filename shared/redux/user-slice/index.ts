import { createSlice } from "@reduxjs/toolkit";
import { initialStateUser } from "../states";

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateUser,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUserData(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUserData } = userSlice.actions;
export default userSlice.reducer;
