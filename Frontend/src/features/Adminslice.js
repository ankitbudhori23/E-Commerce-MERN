import { createSlice } from "@reduxjs/toolkit";

export const Adminslice = createSlice({
  name: "admin",
  initialState: {
    admin: null || JSON.parse(sessionStorage.getItem("admin"))
  },
  reducers: {
    login: (state, action) => {
      state.admin = action.payload;
    },
    logout: (state) => {
      state.admin = null;
    }
  }
});

export const { login, logout } = Adminslice.actions;
export const selectAdmin = (state) => state.admin.admin;
export default Adminslice.reducer;
