import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSummaries = createAsyncThunk(
  "database/fetchSummaries",
  () => {
    return fetch("api/v1/db_summary")
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const fetchSearchResults = createAsyncThunk(
  "database/fetchSearchResults",
  (url) => {
    return fetch(`/api/v1/${url}`)
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const getResultData = createAsyncThunk(
  "database/getResultData",
  (url) => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const postNewSeries = createAsyncThunk(
  "database/postNewSeries",
  (data) => {
    return fetch("/api/v1/serieses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const postNewNationality = createAsyncThunk(
  "database/postNewNationality",
  (data) => {
    return fetch("/api/v1/nationalities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data);
  }
);

export const postNewTrack = createAsyncThunk(
  "database/postNewTrack",
  (data) => {
    return fetch("/api/v1/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
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
    submitFormCategory: "serieses",
    submitFormSeriesName: "",
    submitFormSeriesVehicleType: "motorcycle",
    submitFormNationalityName: "",
    submitFormTrackName: "",
    summaries: {},
    searchResults: null,
    searchResultData: null,
    status: "idle",
  },
  reducers: {
    setSearchCategories(state, action) {
      state.searchCategories = action.payload;
    },
    setSearchFormEventType(state, action) {
      state.searchFormEventType = action.payload;
    },
    setSubmitFormCategory(state, action) {
      state.submitFormCategory = action.payload;
    },
    setSubmitFormSeriesName(state, action) {
      state.submitFormSeriesName = action.payload;
    },
    setSubmitFormSeriesVehicleType(state, action) {
      state.submitFormSeriesVehicleType = action.payload;
    },
    setSubmitFormNationalityName(state, action) {
      state.submitFormNationalityName = action.payload;
    },
    setSubmitFormTrackName(state, action) {
      state.submitFormTrackName = action.payload;
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

export const {
  setSearchCategories,
  setSearchFormEventType,
  setSubmitFormCategory,
  setSubmitFormSeriesName,
  setSubmitFormSeriesVehicleType,
  setSubmitFormNationalityName,
  setSubmitFormTrackName
} = databaseSlice.actions;

export default databaseSlice.reducer;
