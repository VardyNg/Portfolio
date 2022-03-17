import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import theme from './theme'
// import { ThemeProvider, createTheme } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({      
  palette: {
    white: {
      default: "#FFFFFF",
      main: "#FFFFFF",
      font: "#FFFFFF",
      root: {
        color: "#FFFFFF"
      }
    },
    background: {
      default: "#394764"
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  MuiButton: {
    raisedPrimary: {
      color: 'white',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
