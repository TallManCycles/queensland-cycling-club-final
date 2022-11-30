import React, { Component } from 'react'

//Styles
import './Header.css'

export default class Header extends Component {
  render() {
    return (
        <header>
        <img src="/img/banner.gif" alt="banner" />
        <div className="centered">
            <h1>Queensland Cycling Club</h1>
            <p>Welcome to the home of Queensland Cycling Club - Built by cyclists for cyclists.</p>            
        </div>
        </header>
    )
  }
}
