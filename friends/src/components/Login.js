import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";

function Login(props) {
  const [cred, setCred] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });

 const handelChange = (e) => {
    setCred({
      credentials: {
        ...cred.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", cred.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => login(e)}>
        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={cred.credentials.username}
          onChange={handelChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={cred.credentials.password}
          onChange={(e) => handelChange(e)}
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
