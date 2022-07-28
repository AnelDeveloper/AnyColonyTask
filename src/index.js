import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider as ReduxStoreProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./AppToDo/features/userSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ReduxStoreProvider store={store}>
      <App />
    </ReduxStoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
