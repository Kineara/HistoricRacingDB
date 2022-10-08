import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSummaries = createAsyncThunk("summaries/fetchSummaries", () => {
  return fetch("/db_summary")
    .then((response) => response.json())
    .then(data => data);
});

const summariesSlice = createSlice({
  name: "summaries",
  initialState: {
    entities: {},
    status: "idle",
  },
  reducers: {
    summaryAdded(state, action) {
      state.entities.push(action.payload);
    },
    summaryUpdated(state, action) {
      const summary = state.entities.find((summary) => summary.id === action.payload.id);
      summary.url = action.payload.url;
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

export const { summaryAdded, summaryUpdated } = summariesSlice.actions;

export default summariesSlice.reducer;
