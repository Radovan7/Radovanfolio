import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
      },
      secondary: {
        main: "#f50057",
        light: "#ff4081",
        dark: "#c51162",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f5f5f5",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#1a1a1a",
        secondary: mode === "dark" ? "#b0b0b0" : "#424242",
      },
      divider: "#87CEEB",
      icon: {
        main: mode === "dark" ? "#ffffff" : "#424242",
        hover: mode === "dark" ? "#64b5f6" : "#1976d2",
      },
      info: {
        main: "#87CEEB",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        color: mode === "dark" ? "#ffffff" : "#1a1a1a",
      },
      h2: {
        fontWeight: 700,
        color: mode === "dark" ? "#ffffff" : "#1a1a1a",
      },
      h3: {
        fontWeight: 600,
        color: mode === "dark" ? "#ffffff" : "#1a1a1a",
      },
      h4: {
        fontWeight: 600,
        color: mode === "dark" ? "#ffffff" : "#1a1a1a",
      },
      h5: {
        fontWeight: 600,
        color: mode === "dark" ? "#ffffff" : "#1a1a1a",
      },
      h6: {
        fontWeight: 600,
        color: mode === "dark" ? "#ffffff" : "#1a1a1a",
      },
      body1: {
        fontWeight: 500,
        color: mode === "dark" ? "#ffffff" : "#1a1a1a",
      },
      body2: {
        fontWeight: 500,
        color: mode === "dark" ? "#b0b0b0" : "#424242",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
          },
          contained: {
            "&:hover": { backgroundColor: "#6ab7db" },
          },
          outlined: {
            "&:hover": {
              borderColor: "#6ab7db",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#87CEEB" },
              "&:hover fieldset": { borderColor: "#6ab7db" },
              "&.Mui-focused fieldset": { borderColor: "#6ab7db" },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            border: "2px solid #87CEEB",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: "#87CEEB",
          },
        },
      },
    },
  });

export default getTheme;
