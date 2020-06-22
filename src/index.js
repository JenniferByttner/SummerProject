import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header  from './Header';
import Home from './Home';
import Storys from './Storys';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { UsefulResources } from './UsefulResources';
import Quotes from './Quote';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
    <Switch>
          <Route path="/about">
            <Storys/>
          </Route>
          <Route path="/quotes">
            <Quotes/>
          </Route>
          <Route path="/useful_resources">
             <UsefulResources/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

