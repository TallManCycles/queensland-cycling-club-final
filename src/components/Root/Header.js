import React, { Component } from 'react'
import image from "../../img/banner.gif"

//Styles
import './Header.css'

export default class Header extends Component {
  render() {
    return (
        <header>
        <img src={image} alt="banner" />
        <div className="centered">
            <h1>Queensland Cycling Club</h1>
            <p>Welcome to the home of Queensland Cycling Club - Built by cyclists for cyclists.</p>            
        </div>
        </header>
    )
  }
}
