import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { ThemeProvider, useThemeContext } from "./ThemeContext";

const AppWrapper = () => {
  const { theme } = useThemeContext();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <AppWrapper />
  </ThemeProvider>
);
