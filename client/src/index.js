import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import summaryReducer from "./components/summarySlice";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  summaryReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

root.render(
  <React.StrictMode> 
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);