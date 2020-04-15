import React , { Component } from "react";
import fire from "../config/fire";

class Message extends Component{

    state={
      text : ""
    }
  
    handleText=e=>{
      this.setState({
        text : e.target.value
      })
    }
    handleSubmit=e=>{
      let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
      fire.database().ref('messages').push(this.state.text);
      this.setState({
        text : ""
      })
    }
  
    render(){
      return (
        <div>
          <p>Have any question? send a message</p>
          <textarea type ="text" onChange={this.handleText} id="inputText"
          cols="25" name="message" placeholder="Message *" rows="5"></textarea>
          <button class="btn" onClick={this.handleSubmit}> Submit </button>
        </div>
      );
    }
  }
  
  export default Message;