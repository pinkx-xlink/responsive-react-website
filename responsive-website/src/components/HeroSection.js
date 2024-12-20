import React from 'react'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div classame='hero-container'>
        <video src='/src/videos/video-2.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p> What are you waiting for? </p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                GET STARTED
            </Button>
        </div>
    </div>
  )
}

export default HeroSection