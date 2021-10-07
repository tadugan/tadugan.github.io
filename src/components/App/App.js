import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import AppBarNav from '../AppBarNav/AppBarNav';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#455a64',
      light: '#718792',
      dark: '#1c313a',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppBarNav />
          <Switch>
            <Redirect exact from="/" to="/about" />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
