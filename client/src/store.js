import { configureStore } from "@reduxjs/toolkit"
import summaryReducer from "./components/summariesSlice"
import accountReducer from "./components/accountSlice" 
import createAccountReducer from "./components/createAccountSlice"

const store = configureStore({
  reducer: {
    summaries: summaryReducer,
    account: accountReducer,
    createAccount: createAccountReducer
  },
});

export default store;