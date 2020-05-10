import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

class Login extends React.Component {
  state = {
    //isLoading: false,
    credentials: {
      username: "",
      password: ""
    },
  };

  handelChange = (e) => {
    this.setState({    
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    //this.setState({...this.state, isLoading: true})

    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        //this.setState({...this.state, isLoading: false})
       // this.props.history.push("/protected");
      })
      .catch((err) => console.log("ERR", err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            //placeholder="UserName"
            value={this.state.credentials.username}
            onChange={this.handelChange}
          />
          <input
            type="password"
            name="password"
            //placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handelChange}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
