import { useEffect } from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({title}) {

    function contactUs() {
        const firstName = document.getElementById("first_name").value;
        document.getElementById("thankyou").innerText = `Thank you ${firstName}!, Your message has been received.
                                                                                    We will be in contact shortly.`;
        setTimeout(closeModal,2000);
    }

    function closeModal () {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
        clearData();
    }

    function clearData() {
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("thankyou").innerText = "";
    }

  return ReactDOM.createPortal((
    <section id="modalBox">
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <section id="contact">
                    <div className="contactuscontainer">
                    <h2 id="modalTitle">Contact Us</h2>
                    <form name="contact_us" method="#">
                        <ul className="contactus">
                            <li>
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" id="first_name" name="first_name" required/>
                            </li>
                            <li>
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" required/>
                            </li>
                            <li>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required/>
                            </li>                                                            
                            <li>
                                <input type="checkbox" id="racedetails" name="racedetails"/> 
                                <label htmlFor="racedetails">Race details</label>                             
                            </li>
                            <li>
                                <input type="checkbox" id="groupridedetails" name="groupridedetails"/> 
                                <label htmlFor="groupridedetails">Join a group ride</label>                             
                            </li>
                            <li>                                
                                <input type="checkbox" id="complaint" name="complaint"/> 
                                <label htmlFor="complaint">Lodge a complaint</label>                             
                            </li>
                            <li>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message"></textarea>
                            </li>
                            <li><p id="thankyou" ></p></li>
                        </ul>
                        <p>
                        <button type="sumbit" onClick={contactUs}>Submit</button>
                        </p>
                    </form>
                </div>
                </section>
            </div>
        </div>
    </section> 
  ),document.body)
}
