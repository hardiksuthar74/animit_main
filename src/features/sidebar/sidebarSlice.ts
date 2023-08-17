import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface CounterState {
  sideBar: boolean;
}

const initialState: CounterState = {
  sideBar: false,
};

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.sideBar = true;
    },
    closeSideBar: (state) => {
      state.sideBar = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sideBarSlice.actions;

export const sideBarState = (state: RootState) => state.sideBar.sideBar;

export default sideBarSlice.reducer;
