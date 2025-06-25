import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import notifReducer from "./notificationSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    notif: notifReducer,
  },
});

export default store;
