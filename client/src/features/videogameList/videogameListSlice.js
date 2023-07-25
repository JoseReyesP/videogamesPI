import { createSlice } from "@reduxjs/toolkit";

export const videogameListSlice = createSlice({
  name: "videogameList",
  initialState: {
    videogameList: [],
    previousList: [],
  },
  reducers: {
    addVideoGame(state, action) {
      state.videogameList.push(action.payload);
    },
    filtrarNombreVideoGame(state, action) {
      state.videogameList = state.videogameList.filter(
        (item) => item.name === action.payload
      );
    },
    createBackupList(state, action) {
      state.previousList = state.videogameList;
    },
    resetList(state, action) {
      state.videogameList = state.previousList;
    },
  },
});

export const {
  addVideoGame,
  filtrarNombreVideoGame,
  createBackupList,
  resetList,
} = videogameListSlice.actions;

export default videogameListSlice.reducer;
