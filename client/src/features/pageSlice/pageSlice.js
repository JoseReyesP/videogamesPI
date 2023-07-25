import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "pages",
  initialState: {
    page: 0,
  },
  reducers: {
    updatePage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { updatePage } = pageSlice.actions;

export default pageSlice.reducer;
