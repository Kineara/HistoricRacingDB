import { configureStore } from "@reduxjs/toolkit"
import summaryReducer from "./components/summarySlice"
import accountReducer from "./components/accountSlice" 

const store = configureStore({
  reducer: {
    summary: summaryReducer,
    account: accountReducer
  },
});

export default store;