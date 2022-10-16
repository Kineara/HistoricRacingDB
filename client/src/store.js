import { configureStore } from "@reduxjs/toolkit";
import summaryReducer from "./components/summariesSlice";
import accountReducer from "./components/accountSlice";
import createAccountReducer from "./components/createAccountSlice";
import loginReducer from "./components/loginSlice";

const store = configureStore({
  reducer: {
    summaries: summaryReducer,
    account: accountReducer,
    createAccount: createAccountReducer,
    login: loginReducer,
  },
});

export default store;