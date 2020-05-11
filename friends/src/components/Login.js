import React, { useState } from "react";
import axiosWithAuth from "../util/axiosWithAuth";
import "./Login.css";

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
    <div class="login">
      <div class="login-triangle"></div>

      <h1 class="login-header">Login</h1>
      <form class="login-container" onSubmit={(e) => login(e)}>
        <p>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={cred.credentials.username}
            onChange={handelChange}
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={cred.credentials.password}
            onChange={(e) => handelChange(e)}
          />
        </p>

        <p>
          <input type="submit" value="Log in" />
        </p>
      </form>
    </div>
  );
}

export default Login;
