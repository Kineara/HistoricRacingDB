import { configureStore } from "@reduxjs/toolkit";
import summaryReducer from "./Slices/summariesSlice";
import accountReducer from "./Slices/accountSlice";
import createAccountReducer from "./Slices/createAccountSlice";
import loginReducer from "./Slices/loginSlice";
import submitFormReducer from "./Slices/submitFormSlice";
import databaseReducer from "./Slices/databaseSlice";

const store = configureStore({
  reducer: {
    summaries: summaryReducer,
    account: accountReducer,
    createAccount: createAccountReducer,
    login: loginReducer,
    submitForm: submitFormReducer,
    database: databaseReducer,
  },
});

export default store;