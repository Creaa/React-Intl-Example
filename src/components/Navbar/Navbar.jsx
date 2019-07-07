import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "2vh"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = ({ changeLanguageHandler }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
          <Button onClick={() => changeLanguageHandler("pl")} color="inherit">
            PL
          </Button>
          <Button onClick={() => changeLanguageHandler("en")} color="inherit">
            EN
          </Button>
          <Button onClick={() => changeLanguageHandler("de")} color="inherit">
            DE
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
