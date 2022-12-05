import React, { Component } from 'react'
import imageAbout from "../../img/logo_transparent.png"

import './About.css'

export default class About extends Component {
  render() {

    function showModal(){
      let modal = document.getElementById("myModal");
      modal.style.display = "block";

      let modalTitle = document.getElementById("modalTitle");
        modalTitle.innerText = "Contact Us";
    }

    return (
    <section id="about">
        <img className="aboutimage" src={imageAbout} alt="logo"/>
        <h2>About Us</h2>
        <p>Greetings, we're a cycling club dedicated to all levels of cyclists, from casual group riders to elite-level cyclists!</p>
        <p>Want to know more? <a href="#" onClick={showModal}>Contact Us.</a></p>
    </section>
    )
  }
}
