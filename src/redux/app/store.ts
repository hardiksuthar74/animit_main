import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "../slice/sidebarSlice";
import searchAnimeSlice from "../slice/searchAnimeSlice";

export const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    searchAnime: searchAnimeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
