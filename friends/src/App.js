import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend.js";
import FriendsList from "./components/FriendsList";
import DeleteFriend from "./components/DeleteFriend";
import PrivateRoute from "./components/PrivateRoute"
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/friends-list">Friends</Link>
        <br></br>
        <Link to="/add-friend">Add Friend</Link>
        <br></br>
        <Link to="/remove-friend">Delete Friend</Link>

        <Switch>
          <PrivateRoute exact path="/friends-list" component={FriendsList} />
          <PrivateRoute exact path="/add-friend" component={AddFriend} />
          <PrivateRoute exact path="/remove-friend" component={DeleteFriend} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
