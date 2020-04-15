import React , { Component } from "react";
import fire from "../config/fire";
import "./css/login.css";
import loginImg from '../logo/loginImg.png';

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}

render() {
    return (
      <div className="base-container">
        <div className="header">Login or SignUp</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt='avater'/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
              </div>
          </div>
        </div>
        <div className="footer">
        <button type="button" className="btn" onClick={this.login}>Login</button> 
        <button type="button" className="btn" onClick={this.signup}>SignUp</button>
        </div>
      </div>
    );
  }
}
export default Login;