import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { I18nextProvider } from "react-i18next";

import i18next from "../src/stores/i18next";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
