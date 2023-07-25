import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    name: "",
  },
  reducers: {
    updateName(state, action) {
      state.title = action.payload;
    },
    resetName(state) {
      state.title = "";
    },
  },
});

export const { updateTitle, updateDescription, resetDescription, resetTitle } =
  userInputSlice.actions;

export default searchBarSlice.reducer;
