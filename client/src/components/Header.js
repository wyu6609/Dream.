import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";

import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import MenuIcon from "@mui/icons-material/Menu";

import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={10}>
        <Toolbar>
          <Grid container spacing={1} sx={{ display: "flex" }}>
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid sx={{ mt: 1.5 }} item xs></Grid>
            <Grid item>
              log out
              <IconButton
                edge="end"
                color="inherit"
                onClick={props.handleLogoutClick}
              >
                <ExitToAppRoundedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
