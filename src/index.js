import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import theme from './theme'
// import { ThemeProvider, createTheme } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

console.log(
"Y88b      /      e      888~-_   888~-_   Y88b    /\n",
" Y88b    /      d8b     888   \  888   \   Y88b  / \n",
"  Y88b  /      /Y88b    888    | 888    |   Y88b/  \n",
"   Y888/      /  Y88b   888   /  888    |    Y8Y   \n",
"    Y8/      /____Y88b  888_-~   888   /      Y    \n",
"     Y      /      Y88b 888 ~-_  888_-~      /     \n",
)
// hide console.log on production
if (process.env.NODE_ENV !== "development"){
  console.log = () => { };
}

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
