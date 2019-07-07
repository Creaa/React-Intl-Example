import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Intl from "./utils/Intl";
import Typography from "@material-ui/core/Typography";

function App({ setLanguage }) {
  return (
    <div className="App">
      <Navbar changeLanguageHandler={setLanguage} />
      <Typography variant="h6">{Intl.messages["loremIpsum"]}</Typography>
    </div>
  );
}

export default App;
