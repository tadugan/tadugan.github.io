import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import AppBarNav from '../AppBarNav/AppBarNav';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBarNav />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
