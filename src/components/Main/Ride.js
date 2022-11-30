import React from 'react'
import Modal from '../Global/Modal'

export default function Ride({styling,title,speed,location,time}) {

  function showModal(){
    let modal = document.getElementById("myModal");
    modal.style.display = "block";

    let modalTitle = document.getElementById("modalTitle");
      modalTitle.innerText = "Join Group Ride";
  }

    return (
        <ul className={styling}>
        <h3>{title}</h3>
        <li><p>Average Speed: {speed}km/ph</p></li>
        <li><p>Starting Location: {location}</p></li>
        <li><p>Time: {time}</p></li>
        <li><button onClick={showModal}>Join This Ride</button></li>
     </ul>
    )
  }
  
