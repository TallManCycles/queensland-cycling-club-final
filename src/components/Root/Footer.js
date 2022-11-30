import React, { Component } from 'react'

//Styles
import "./Footer.css"

export default class Footer extends Component {
  render() {

    function showModal(){
      let modal = document.getElementById("myModal");
      modal.style.display = "block";

      let modalTitle = document.getElementById("modalTitle");
        modalTitle.innerText = "Contact Us";
    }

    return (        
            <footer>
                <address>
                    <a href="#contact">Contact Us</a>
                </address>
                <small> &copy; 2022 Queensland Cycling Club</small>
            </footer>       
    )
  }
}
