import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend.js";
import FriendsList from "./components/FriendsList";
import DeleteFriend from "./components/DeleteFriend";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

class App extends React.Component {
  /*constructor() {
      super();
      this.state = { credentials: {} }
  }*/

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/login">Login</Link>
          <br></br>
          <Link to="/friends-list">Friends</Link>
          <br></br>
          <Link to="/add-friend">Add Friend</Link>
          <br></br>
          <Link to="/remove-friend">Delete Friend</Link>

          <Switch>
          <Route path="/login" component={Login} />
            <PrivateRoute exact path="/friends-list" component={FriendsList} />
            <PrivateRoute exact path="/add-friend" component={AddFriend} />
            <PrivateRoute
              exact
              path="/remove-friend"
              component={DeleteFriend}
            />
            
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
