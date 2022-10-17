import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import databaseReducer from "./slices/databaseSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    database: databaseReducer,
  },
});

export default store;