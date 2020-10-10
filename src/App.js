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
    <div>
      <Router>

        <div className="ui pointing menu">

          <div className="ui compact menu">
            <div className="ui simple dropdown item">

              <i className="th icon" />
              <div className="menu">
                <Link to="/" className="item">Home</Link>
                <Link to="/page1" className="item">Page1</Link>
                <Link to="/page2" className="item">Page2</Link>
              </div>
            </div>
          </div>

          <Link to="/" className="item">Home</Link>
          <Link to="/page1" className="item">Page1</Link>
          <Link to="/page2" className="item">Page2</Link>

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


          <div>


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



        </div>




      </Router>

    </div>
  );
}

export default App;
