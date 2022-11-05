import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Userslice";
import adminReducer from "../Features/Adminslice";
export default configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer
  }
});
