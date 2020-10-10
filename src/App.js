import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const App = () => {
  return (
    <div classNameName="App">

      <div className="ui pointing menu">

        <div className="ui compact menu">
          <div className="ui simple dropdown item">
            Dropdown
    <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">Choice 1</div>
              <div className="item">Choice 2</div>
              <div className="item">Choice 3</div>
            </div>
          </div>
        </div>

        <a className="item">
          Home
  </a>
        <a className="item">
          Messages
  </a>
        <a className="item active">
          Friends
  </a>

        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <header className="App-header">
          <h1> My Simple App</h1>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/page1">Page1</Link>
                  </li>
                  <li>
                    <Link to="/page2">Page2</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>

                <Route path="/page1">
                  <Page1 />
                </Route>
                <Route path="/page2">
                  <Page2 />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </header>
      </div>





    </div>
  );
}

export default App;
