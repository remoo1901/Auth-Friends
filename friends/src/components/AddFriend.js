import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

class AddFriend extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: "",
    },
  };

  handelChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      },
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/friends", this.state.friend)
      .then((res) => console.log(res))
      .catch((err) => console.log("ERR", err));
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.friend.name}
          placeholder="Name"
          onChange={this.handelChange}
        />
        <input
          type="text"
          name="age"
          value={this.state.friend.age}
          placeholder="Age"
          onChange={this.handelChange}
        />
        <input
          type="text"
          name="email"
          value={this.state.friend.email}
          placeholder="Email"
          onChange={this.handelChange}
        />
        <button>Add Friend</button>
      </form>
    );
  }
}

export default AddFriend;
