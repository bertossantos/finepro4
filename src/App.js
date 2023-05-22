import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import HomePage from './Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <h1>Login Page</h1>
            {isLoggedIn ? <Redirect to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />}
          </Route>
          <Route path="/">
            {isLoggedIn ? <HomePage /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
