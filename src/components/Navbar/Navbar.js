import React from 'react';
import { BrowserRouter, Link, Route, NavLink, Switch } from 'react-router-dom';
import './Navbar.css';

// Component
import Home from './../Home/Home';
import Artists from './../Artists/Artists';
import NotFound from './../NotFound/NotFound';
import Player from './../Player/Player';

function Navbar() {
  return (
    <BrowserRouter>
      <div className="Navbar">
        <div className="brand-logo">
          <Link to="/">Sound<span>MIX</span></Link>
        </div>

        <ul>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/artists" exact activeClassName="active">Artists</NavLink>
        </ul>
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/artists" exact component={Artists} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navbar;