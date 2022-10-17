import { createSlice } from "@reduxjs/toolkit";

// export const getMe = createAsyncThunk("accounts/getMe", () => {
//   return fetch("/me")
//     .then((response) => response.json())
//     .then((data) => data);
// });

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
