import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    values: [],
  },
  reducers: {
    updateDetails(state, action) {
      state.values = action.payload;
    },
  },
});

export const { updateDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
