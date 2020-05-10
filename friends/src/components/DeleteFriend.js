import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

class DeleteFriend extends React.Component {
  state = {
    id: "",
   
  };

 deleteChanger = (e) => {
    this.setState({ id: e.target.value});  
  };

  deleteHandler = e => {
    e.preventDefault()
    axiosWithAuth()
    .delete(`/friends/${this.state.id}`)
    .then(res => console.log(res))
    .catch(err => console.log("ERROR", err))
      
  }

  render() {
    return ( 
    <form onSubmit={this.deleteHandler}>
    <input  type="text" value={this.state.id} onChange={this.deleteChanger} />
    <button>Remove Friend</button>
    </form>
    )
  }
}

export default DeleteFriend;
