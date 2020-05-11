import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend.js";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <section className="App">
      <Router>
        <div className="nav">
          <Link to="/login">Login</Link>

          <Link to="/friendslist">Friends List</Link>

          <Link to="/addfriend">Add Friend</Link>
          <button onClick={logout}>Log Out</button>
        </div>

        <Switch>
          <PrivateRoute exact path="/friendslist" component={FriendsList} />
          <PrivateRoute exact path="/addfriend" component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </section>
  );
}
export default App;
