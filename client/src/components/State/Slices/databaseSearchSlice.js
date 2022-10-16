import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSearchResults = createAsyncThunk("databaseSearch/getSearchResults", () => {
  return fetch(`/${state.searchCategory}`)
    .then((response) => response.json())
    .then((data) => data);
});

const databaseSearchSlice = createSlice({
  name: "databaseSearch",
  initialState: {
    searchCategory: "serieses",
    searchResults: [],
    status: "idle",
  },
  reducers: {
    setSearchCategory(state, action) {
      state.searchCategory = action.payload;
    },
  },
  extraReducers: {
    [getSearchResults.pending](state) {
      state.status = "loading";
    },
    [getSearchResults.fulfilled](state, action) {
      state.searchResults = action.payload;
      state.status = "idle";
    },
  },
});

export const { setCategories } = databaseSlice.actions;

export default databaseSlice.reducer;