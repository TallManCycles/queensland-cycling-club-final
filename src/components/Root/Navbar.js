import React, { Component } from 'react'
import Modal from '../Global/Modal'

//Styles
import './Navbar.css'

export default class Navbar extends Component {
  render() {

    function showModal(){
      let modal = document.getElementById("myModal");
      modal.style.display = "block";

      let modalTitle = document.getElementById("modalTitle");
        modalTitle.innerText = "Contact Us";
    }

    return (
        <nav>
            <ul className="navigation">                 
                <li><a className="navBarStyle" href="#races">Upcoming Races</a></li>
                <li><a className="navBarStyle" href="#rides">Group Rides</a></li>
                <li><a className="navBarStyle" href="#recentraces">Recent Races</a></li>
                <li><a className="navBarStyle" href="#about">About</a></li>
                <li><a className="navBarStyle" onClick={showModal}>Contact</a></li>
            </ul>            		
        </nav>
    )
  }
}
