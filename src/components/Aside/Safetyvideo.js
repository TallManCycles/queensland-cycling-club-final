import React, { Component } from 'react'

import './Safetyvideo.css'

export default class Safetyvideo extends Component {
  render() {
    return (
    <section id="video">
        <h2>Community Safety Reminders</h2>
        <iframe className="cyclingSafety" src="https://www.youtube.com/embed/TOS0mh44e3k" title="cycling safety" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </section>  
    )
  }
}
