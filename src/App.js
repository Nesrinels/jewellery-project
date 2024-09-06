import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#533567',
    },
    secondary: {
      main: '#f44336',
    },
  },
});
function App() {
  return (
    
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes/>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;