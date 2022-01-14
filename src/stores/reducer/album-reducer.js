import { createSlice } from "@reduxjs/toolkit";

const albumsInitialState = {
  data: null,
};

const albumsSlice = createSlice({
  name: "albums",
  initialState: albumsInitialState,
  reducers: {
    addAlbums: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export default albumsSlice.reducer;
export const { addAlbums } = albumsSlice.actions;

export const selectAlbums = (state) => state.albums.data;
