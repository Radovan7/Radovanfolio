import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#87CEEB', 
    },
    secondary: {
      main: '#b4b4b4',
    },
    background: {
      default: '#000000', 
      paper: '#1a1a1a', 
    },
    text: {
      primary: '#87CEEB',
      secondary: '#b6b6b6',
    },
    divider: '#87CEEB', 
    icon: {
      main: '#ffffff',
      hover: '#87CEEB', 
    },
    info: {
      main: '#87CEEB', 
    },
  },
  typography: {
    fontFamily: '"Courier New", Courier, monospace',
    h1: { fontWeight: 700, fontSize: '3rem', color: '#87CEEB' },
    h2: { fontWeight: 700, fontSize: '2.5rem', color: '#87CEEB' },
    h3: { fontWeight: 700, fontSize: '2rem', color: '#87CEEB' },
    h4: { fontWeight: 700, fontSize: '1.75rem', color: '#87CEEB' },
    h5: { fontWeight: 700, fontSize: '1.5rem', color: '#87CEEB' },
    h6: { fontWeight: 700, fontSize: '1.25rem', color: '#87CEEB' },
    body1: { color: '#ffffff' },
    body2: { color: '#cccccc' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
        contained: {
          backgroundColor: '#87CEEB', 
          '&:hover': { backgroundColor: '#6ab7db' }, 
        },
        outlined: {
          borderColor: '#87CEEB', 
          color: '#87CEEB',
          '&:hover': {
            borderColor: '#6ab7db', 
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': { color: '#ffffff' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#87CEEB' }, 
            '&:hover fieldset': { borderColor: '#6ab7db' }, 
            '&.Mui-focused fieldset': { borderColor: '#6ab7db' }, 
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          borderRadius: '12px',
          border: '2px solid #87CEEB', 
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#87CEEB', 
        },
      },
    },
  },
});

export default theme;
