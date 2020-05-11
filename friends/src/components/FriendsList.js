import React, { useState, useEffect } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

function FriendsList() {
  const [friends, setFriends] = useState([]);
   

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      })
      .catch((err) => console.log("ERRR", err));
  }, []);

   
  const deleteHandler = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then((res) => setFriends(res.data))
      .catch((err) => console.log("ERROR", err));
  };

  return (
    <div>
      <h1>Friends List</h1>
      {friends.map((x) => {
        return (
          <div key={x.id}>
            <h3>Name: {x.name}</h3>

            <h3>Age: {x.age}</h3>
            <h3>Email: {x.email}</h3>

            <button onClick={(e) => deleteHandler(e, x.id)}>
              Remove Friend
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FriendsList;
