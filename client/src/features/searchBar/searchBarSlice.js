import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    searchValue: "",
  },
  reducers: {
    updateSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    resetSearchValue(state) {
      state.searchValue = "";
    },
  },
});

export const { updateSearchValue, resetSearchValue } = searchBarSlice.actions;

export default searchBarSlice.reducer;
