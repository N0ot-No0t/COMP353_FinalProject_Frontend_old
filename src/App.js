import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //useRouteMatch
} from "react-router-dom";
import Employer from './Employer';
import User from './User';

//test123

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Employer">Employer</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Employer" component={Employer}>
            <Employer />
          </Route>
          <Route path="/User" component={User}>
            <User />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

      </header>
    </div>
  );
}

function Home() {
  return <h2>Welcome to the Web Career Portal Site</h2>;
}

/*


function Employer() {
  return <h2>Employer</h2>;
}

function User() {
  return <h2>User</h2>;
}
*/

export default App;
