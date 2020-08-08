import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //useRouteMatch
} from "react-router-dom";

import addJob from "./components/addJob";
import Job from "./components/jobComponent";
import jobList from "./components/jobListComponent";

function Employer() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div>
          <nav className="navbar-navbar-expand-navbar-dark-bg-dark">
            <a href="/jobs" className="navbar-brand">
              WebPortal
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/jobs"} className="nav-link">
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/jobs"]} component={jobList} />
              <Route exact path="/add" component={addJob} />
              <Route path="/jobs/:id" component={Job} />
            </Switch>
          </div>
        </div>
      </Router>
      </header>
    </div>
  );
}

export default Employer;