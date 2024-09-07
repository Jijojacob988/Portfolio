import React, { useState } from 'react';
import './Contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = useState("");
    const [notification, setNotification] = useState(false); // Notification state

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4e79be01-f4e0-43be-a969-9a11cab7b608");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          setNotification(true);  // Show notification

          // Hide notification after 3 seconds
          setTimeout(() => {
            setNotification(false);
          }, 3000);
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" /> 
                            <p>jijojacob988@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" /> 
                            <p>+91 9562415096</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" /> 
                            <p>Kerala, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label>Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' required />
                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message' required ></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>

            {/* Simple notification message */}
            {notification && <div className="notification">Email sent successfully!</div>}

            <p>{result}</p> {/* Show form result */}
        </div>
    )
}

export default Contact;
