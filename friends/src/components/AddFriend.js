import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

function AddFriend() {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  const handelChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFriend = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/friends", friend)
      .then((res) => console.log(res))
      .catch((err) => console.log("ERR", err));
  };

  return (
    <form onSubmit={addNewFriend}>
      <input
        type="text"
        name="name"
        value={friend.name}
        placeholder="Name"
        onChange={handelChange}
      />
      <input
        type="text"
        name="age"
        value={friend.age}
        placeholder="Age"
        onChange={handelChange}
      />
      <input
        type="text"
        name="email"
        value={friend.email}
        placeholder="Email"
        onChange={handelChange}
      />
      <button>Add Friend</button>
    </form>
  );
}

export default AddFriend;
