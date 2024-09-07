import React from 'react';
import './Hero.css';
import profile from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="Profile" />
      <h1>It's Jijo Jacob</h1>
      <h2 className="animated-titles">
        <span>Full Stack Developer</span>
        <span>Store Manager</span>
        <span>Stock Trader</span>
        <span>Web Designer</span>
        <span>Trader</span>
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
