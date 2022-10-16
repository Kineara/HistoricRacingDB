import { createSlice } from "@reduxjs/toolkit";

const databaseSlice = createSlice({
  name: "database",
  initialState: {
    categories: [
      {label: "nationalities", value: "nationalities"},
      {label: "series", value: "serieses"},
      {label: "tracks", value: "tracks"},
      {label: "teams", value: "teams"},
      {label: "manufacturers", value: "manufacturers"},
      {label: "competitors", value: "competitors"},
    ],
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = databaseSlice.actions;

export default databaseSlice.reducer;