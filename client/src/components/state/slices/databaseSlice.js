import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSummaries = createAsyncThunk("database/fetchSummaries", () => {
    return fetch("/db_summary")
      .then((response) => response.json())
      .then((data) => data);
  }
);

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
    entities: {},
    status: "idle",
  },
  reducers: {
    setCategories(state, action) {
      state.searchCategories = action.payload;
    },
    setSearchFormEventType(state, action) {
      state.eventType = action.payload;
    },
  },
  extraReducers: {
    [fetchSummaries.pending](state) {
      state.status = "loading";
    },
    [fetchSummaries.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { setSearchCategories, setSearchFormEventType } = databaseSlice.actions;

export default databaseSlice.reducer;
