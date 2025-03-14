import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import localeEsMessages from "./es.json";
import localeEnMessages from "./en.json";

const userLocale = navigator.language.startsWith("es") ? "es" : "en";
const messages = userLocale === "es" ? localeEsMessages : localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProvider locale={userLocale} messages={messages}>
    <App locale={userLocale} />
  </IntlProvider>
);

reportWebVitals();
//serviceWorkerRegistration.register();
