import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div>
        <h1>Marvel Comics App</h1>
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to="/browse" activeClassName="active-link">Browse Characters</NavLink></li>
            <li><NavLink to="/comics" activeClassName="active-link">Comics</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browse" component={BrowseCharacters} />
          <Route path="/character/:id" component={CharacterDetails} />
          <Route path="/comics" component={Comics} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;