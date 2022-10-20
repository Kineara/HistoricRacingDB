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

export const getResultData = createAsyncThunk("database/getResultData", (url) => {
  return fetch(url) 
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
    searchResults: null,
    searchUrl: null,
    searchResultData: null,
    status: "idle",
  },
  reducers: {
    setCategories(state, action) {
      state.searchCategories = action.payload;
    },
    setSearchFormEventType(state, action) {
      state.searchFormEventType = action.payload;
    },
    setSearchUrl(state, action) {
      state.searchResultUrl = action.payload;
    }
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
    [getResultData.pending](state) {
      state.status = "loading";
    },
    [getResultData.fulfilled](state, action) {
      state.searchResultData = action.payload;
      state.status = "idle";
    },
  },
});

export const { setSearchCategories, setSearchFormEventType, setSearchUrl } =
  databaseSlice.actions;

export default databaseSlice.reducer;
