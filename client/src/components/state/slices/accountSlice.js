import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    currentUser: null,
    userToken: null,
    loginUsername: "",
    loginPassword: "",
    createAccountUsername: "",
    createAccountPassword: "",
    createAccountPasswordConfirmation: "",
  },
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
    setUserToken(state, action) {
      state.userToken = action.payload;
    },
    setCreateAccountUsername(state, action) {
      state.createAccountUsername = action.payload;
    },
    setCreateAccountPassword(state, action) {
      state.createAccountPassword = action.payload;
    },
    setCreateAccountPasswordConfirmation(state, action) {
      state.createAccountPasswordConfirmation = action.payload;
    },
    setLoginUsername(state, action) {
      state.loginUsername = action.payload;
    },
    setLoginPassword(state, action) {
      state.loginPassword = action.payload;
    },
  },
});

export const {
  setUser,
  setUserToken,
  setCreateAccountUsername,
  setCreateAccountPassword,
  setCreateAccountPasswordConfirmation,
  setLoginUsername,
  setLoginPassword,
} = accountSlice.actions;

export default accountSlice.reducer;
