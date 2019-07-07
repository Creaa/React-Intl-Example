import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { addLocaleData } from "react-intl";
import { IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import pl from "react-intl/locale-data/pl";
import de from "react-intl/locale-data/de";
import Intl from "./utils/Intl";

addLocaleData([...en, ...pl, ...de]);
function render() {
  ReactDOM.render(
    <IntlProvider locale={Intl.locale} messages={Intl.messages}>
      <App setLanguage={lang => Intl.load(lang).then(render)} />
    </IntlProvider>,
    document.getElementById("root")
  );
}

Intl.load("pl").then(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
