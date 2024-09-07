import React from 'react'
import './Footer.css'
import logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import fb_icon from '../../assets/icon_facebook.svg'
import insta_icon from '../../assets/icon_instagram.svg'
import linkedin_icon from '../../assets/icon_linkedin.svg'
import github_icon from '../../assets/icon_github.svg'
import whatsapp_icon from '../../assets/icon_whatsapp.svg'
import gmail_icon from '../../assets/icon_gmail.svg'
import twitter_icon from '../../assets/icon_twitter.svg'
import youtube_icon from '../../assets/icon_youtube.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>Lorem ipsum doloVoluptatem quidem pariatur rerum!</p>

            </div>
            <div className="footer-top-right">
    <h1>Stay Connected With Me!</h1>
    <div className="footer-icons">
    <img src={linkedin_icon} alt="LinkedIn" />
    <img src={insta_icon} alt="Instagram" />
        <img src={fb_icon} alt="Facebook" />
        <img src={twitter_icon} alt="Twitter" />
        
        
        <img src={github_icon} alt="GitHub" />
        <img src={whatsapp_icon} alt="WhatsApp" />
        <img src={gmail_icon} alt="Gmail" />
        
        <img src={youtube_icon} alt="YouTube" />
    </div>
</div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Jijo Jacob.All Rights Reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer