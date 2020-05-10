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
          <div key={x.id}>
            <h2>{x.name}</h2>
            <h3>{x.age}</h3>
            <h3>{x.email}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
