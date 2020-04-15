import React , { Component } from "react";
import fire from "../config/fire";
import "./css/home.css";
import Message from "./Message.js";

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
        <div>
    <div class="wrapper">

    <nav class="main-nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
        <button class="btn" onClick={this.logout}>Logout</button>
        </li>
      </ul>
    </nav>
    </div>

    <section class="top-container">
      <header class="showcase">
        <h1>You are Welcome!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam! Nihil quo minima nulla atque!</p>
        <a href="#" class="btn">Read More</a>
      </header>

      <div class="top-box top-box-a">
        <h4>Membership</h4>
        <p class="price">$299/mo</p>
        <a href="" class="btn">Buy Now</a>
      </div>

      <div class="top-box top-box-b">
        <h4>Pro Membership</h4>
        <p class="price">$499/mo</p>
        <a href="" class="btn">Buy Now</a>
      </div>
    </section>

    <section class="boxes">
      <div class="box">
        <i class="fas fa-chart-pie fa-4x"></i>
        <h3>Analytics</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div class="box">
        <i class="fas fa-globe fa-4x"></i>
        <h3>Marketing</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div class="box">
        <i class="fas fa-cog fa-4x"></i>
        <h3>Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
      <div class="box">
        <i class="fas fa-users fa-4x"></i>
        <h3>Support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
      </div>
    </section>

<section class="info">
    <div>
    <Message />
    </div>
  <div>
    <h2>Just some Information</h2>
    <p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus? Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?
    Quae atque vero modi quidem! <a href="#">Autem cupiditate</a> fugit doloribus ad amet, asperiores provident commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?
    Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non</p>
   </div>  
</section>

<section class="portfolio">      
   <img src="https://source.unsplash.com/random/205x200" alt=""></img>
   <img src="https://source.unsplash.com/random/205x200" alt=""></img>
   <img src="https://source.unsplash.com/random/205x200" alt=""></img>
   <img src="https://source.unsplash.com/random/205x200" alt=""></img>
   <img src="https://source.unsplash.com/random/205x200" alt=""></img>
   <img src="https://source.unsplash.com/random/205x200" alt=""></img>      
</section>

<footer>
    <p>Created by Valentine Onah &copy; 2020 |
    <a href="https://www.linkedin.com/in/valentine-onah/" target="_blank">LinkedIn</a> |
    <a href="https://github.com/UcValentine" target="_blank">GitHub</a> |</p>
</footer>
</div>
    )
  }
}
export default Home;