import { configureStore } from "@reduxjs/toolkit"
import summaryReducer from "./components/summariesSlice"
import accountReducer from "./components/accountSlice" 

const store = configureStore({
  reducer: {
    summaries: summaryReducer,
    account: accountReducer
  },
});

export default store;