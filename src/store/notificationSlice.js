import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  status: "",
  title: null,
  message: null,
};

const notifSlice = createSlice({
  name: "notificationProgress",
  initialState,
  reducers: {
    showNotif(state, action) {
      state.isShow = true;
      state.status = action.payload.status;
      state.title = action.payload.title || "title";
      state.message = action.payload.message || "message";
    },
    hideNotif(state) {
      state.isShow = false;
    },
    resetNotif(state) {
      state.isShow = false;
      state.status = "";
      state.title = null;
      state.message = null;
    },
  },
});

export default notifSlice.reducer;
export const notifActions = notifSlice.actions;
