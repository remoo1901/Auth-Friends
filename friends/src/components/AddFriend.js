import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";
import "./AddFriend.css"

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
    <div>
      <h1>Add Friend</h1>
      <form onSubmit={addNewFriend}>

        <label className="add">
          <input
            type="text"
            name="name"
            value={friend.name}
            placeholder="Name"
            onChange={handelChange}
          /></label>
          <label className="add">
        <input
          type="text"
          name="age"
          value={friend.age}
          placeholder="Age"
          onChange={handelChange}
        /></label>
        <label className="add">
        <input 
          type="text"
          name="email"
          value={friend.email}
          placeholder="Email"
          onChange={handelChange}
        /></label>
         <button className="addBtn">Add Friend</button> 
      </form>
    </div>
  );
}

export default AddFriend;


/* <label className="add-btn"> */