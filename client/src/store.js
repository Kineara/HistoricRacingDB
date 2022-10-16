import { configureStore } from "@reduxjs/toolkit";
import summaryReducer from "./components/Home/summariesSlice";
import accountReducer from "./components/Account/accountSlice";
import createAccountReducer from "./components/Account/createAccountSlice";
import loginReducer from "./components/Account/loginSlice";
import submitFormReducer from "./components/Database/submitFormSlice";
import databaseReducer from "./components/Database/databaseSlice";

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