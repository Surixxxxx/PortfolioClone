import React from 'react'
import './Hero.css'
import cat from '../../assets/cat.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={cat} alt="" />
        <h1><span>I'm Suresh,</span> Front-End Developer From Banglore</h1>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero
