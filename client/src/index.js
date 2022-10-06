import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import summaryReducer from "./components/summarySlice";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  summaryReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

root.render(
  <React.StrictMode> 
    <Provider store={store}>
      <Box display="flex" justifyContent="center" aligItems="center" minHeight="100vh">
      <App />
      </Box>
    </Provider>
  </React.StrictMode>
);