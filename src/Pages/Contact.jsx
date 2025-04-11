import React from "react";
import { useEffect } from "react";
import "./Contact.css";

function Contact() {

    useEffect(() => {
        document.title = 'Contact';
    }, []);

    return (
        <>
            <h1>Contact</h1>
            <div className="total-sec">
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" /><br />
                    
                    <label>Email</label>
                    <input type="text" placeholder="Enter your Email" /><br />
                    
                    <label>Message</label>
                    <textarea placeholder="Enter your message"></textarea><br />
                    
                    <button type="submit">Submit</button>
                </form>

                <div className="address-bar">
                    <h2>My Address</h2>
                    <p><b>Address:</b> 75/B, Shobujbag, Savar, Dhaka</p>
                    <p><b>Phone:</b> 01601215756</p>
                    <p><b>Email:</b> hassansakib512@gmail.com</p>
                    <iframe
                        src="https://www.google.com/maps?q=23.851821310539822,90.25320527421079&hl=es;z=14&output=embed">
                        </iframe>
                </div>
            </div>
        </>
    );
}


export default Contact;
