import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./components/AppContext/AppContext";
import { worker } from "./mocks/browser";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  // const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
