import { createSlice } from "@reduxjs/toolkit";

const createAccountSlice = createSlice({
  name: "createAccount",
  initialState: {
    username: "",
    password: "",
    passwordConfirmation: "",
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setPasswordConfirmation(state, action) {
      state.passwordConfirmation = action.payload;
    },
  },
});

export const { setUsername, setPassword, setPasswordConfirmation } = createAccountSlice.actions;

export default createAccountSlice.reducer;