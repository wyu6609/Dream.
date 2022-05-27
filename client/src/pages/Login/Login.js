import * as React from "react";
import Avatar from "@mui/material/Avatar";

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import "./Login.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#6320ee",
      contrastText: "white",
    },
  },
});

export default function Login({ onLogin, fetchCartLength, fetchBots }) {
  const [showLogin, setShowLogin] = useState(true);
  //   logout

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <div className="context">
            <h1>Dream.</h1>
          </div>
          <div className="area">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ display: { md: "none" } }}>
              Dream.
            </Typography>
            {showLogin ? (
              <>
                <SigninForm
                  onLogin={onLogin}
                  showLogin={showLogin}
                  setShowLogin={setShowLogin}
                />
              </>
            ) : (
              <>
                <SignupForm
                  onLogin={onLogin}
                  showLogin={showLogin}
                  setShowLogin={setShowLogin}
                />
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
