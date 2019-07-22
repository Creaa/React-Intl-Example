import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar/Navbar.jsx";
import Typography from "@material-ui/core/Typography"

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <Navbar changeLanguageHandler={changeLanguage} />
      <div className="App-intro">
        <Typography>
          {i18n.t('result')}
        </Typography>
      </div>
    </div>
  );
}

export default App