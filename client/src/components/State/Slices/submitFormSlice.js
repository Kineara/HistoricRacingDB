import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getMe = createAsyncThunk("accounts/getMe", () => {
//   return fetch("/me")
//     .then((response) => response.json())
//     .then((data) => data);
// });

const submitFormSlice = createSlice({
  name: "submitForm",
  initialState: {
    eventType: "series",

  },
  reducers: {
    setEventType(state, action) {
      state.eventType = action.payload;
    },
    
    // userAdded(state, action) {
    //   state.entities.push(action.payload);
    // },
    // summaryUpdated(state, action) {
    //   const summary = state.entities.find(
    //     (summary) => summary.id === action.payload.id
    //   );
    //   summary.url = action.payload.url;
    // },
  },
  // extraReducers: {
  //   [getMe.pending](state) {
  //     state.status = "loading";
  //   },
  //   [getMe.fulfilled](state, action) {
  //     state.entities = action.payload;
  //     state.status = "idle";
  //   },
  // },
});

export const { setEventType } = submitFormSlice.actions;

export default submitFormSlice.reducer;