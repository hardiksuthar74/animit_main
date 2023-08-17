import { configureStore } from "@reduxjs/toolkit";
import { sideBarSlice } from "../features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    sideBar: sideBarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
