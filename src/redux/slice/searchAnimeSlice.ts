import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface SearchState {
  animeQuery: string;
}

const initialState: SearchState = {
  animeQuery: "",
};

export const searchAnimeSlice = createSlice({
  name: "searchAnime",
  initialState,
  reducers: {
    setAnimeQuery: (state, action: PayloadAction<string>) => {
      state.animeQuery = action.payload;
    },
  },
});

export const { setAnimeQuery } = searchAnimeSlice.actions;

export const searchAnimeQuery = (state: RootState) =>
  state.searchAnime.animeQuery;

export default searchAnimeSlice.reducer;
