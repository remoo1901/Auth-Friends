import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch((err) => console.log("ERRR", err));
  };

  render() {
    return (
      <div>
        {this.state.friends.map((x) => (
          <div >
            <h3>Name: {x.name}</h3>
            <h5>Id: {x.id}</h5>
            <h3>Age: {x.age}</h3>
            <h3>Email: {x.email}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
