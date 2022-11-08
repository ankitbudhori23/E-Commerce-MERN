import { createSlice } from "@reduxjs/toolkit";

export const Userslice = createSlice({
  name: "user",
  initialState: {
    user: null || JSON.parse(localStorage.getItem("user"))
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = Userslice.actions;
export const selectUser = (state) => state.user.user;
export default Userslice.reducer;
