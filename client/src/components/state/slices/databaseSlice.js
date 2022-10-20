import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSummaries = createAsyncThunk(
  "database/fetchSummaries",
  () => {
    return fetch("/db_summary")
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const fetchSearchResults = createAsyncThunk(
  "database/fetchSearchResults",
  (url) => {
    return fetch(`/${url}`)
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const getData = createAsyncThunk("database/getData", (url) => {
  return fetch(`/${url}`) 
    .then((response) => response.json())
    .then(data => data);
});

const databaseSlice = createSlice({
  name: "database",
  initialState: {
    searchCategories: [
      { label: "nationalities", value: "nationalities" },
      { label: "series", value: "serieses" },
      { label: "tracks", value: "tracks" },
      { label: "teams", value: "teams" },
      { label: "manufacturers", value: "manufacturers" },
      { label: "competitors", value: "competitors" },
    ],
    searchFormEventType: "serieses",
    summaries: {},
    data: null,
    searchResults: null,
    status: "idle",
  },
  reducers: {
    setCategories(state, action) {
      state.searchCategories = action.payload;
    },
    setSearchFormEventType(state, action) {
      state.searchFormEventType = action.payload;
    },
  },
  extraReducers: {
    [fetchSummaries.pending](state) {
      state.status = "loading";
    },
    [fetchSummaries.fulfilled](state, action) {
      state.summaries = action.payload;
      state.status = "idle";
    },
    [fetchSearchResults.pending](state) {
      state.status = "loading";
    },
    [fetchSearchResults.fulfilled](state, action) {
      state.searchResults = action.payload;
      state.status = "idle";
    },
    [getData.pending](state) {
      state.status = "loading";
    },
    [getData.fulfilled](state, action) {
      state.data = action.payload;
      state.status = "idle";
    },
  },
});

export const { setSearchCategories, setSearchFormEventType } =
  databaseSlice.actions;

export default databaseSlice.reducer;
