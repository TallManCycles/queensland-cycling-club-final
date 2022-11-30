import React, { Component } from 'react'

//Third party package
import ReactLinkify from 'react-linkify'

import './Roadclosures.css'

export default class Roadclosures extends Component {
  render() {
    return (
        <section id="roadClosures">
        <h2>Road Closures</h2>
       <ul>
           <li><ReactLinkify><strong>11/12/2022 - ⚠️ Special Event</strong>, Clem Jones Tunnel, Brisbane City qldtraffic.qld.gov.au/ </ReactLinkify></li>
           <li><ReactLinkify><strong>19/12/2022 - ⚠️ Special Event</strong>, Albert Street, Brisbane City more details qldtraffic.qld.gov.au/</ReactLinkify></li>
           <li><ReactLinkify><strong>20/12/2022 - ⚠️ Special Event</strong>, Albert Street more details qldtraffic.qld.gov.au/</ReactLinkify></li>
       </ul>
    </section>
    )
  }
}
