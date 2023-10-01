import React from 'react';
import { Link } from 'react-router-dom';
import introImg from '../assets/herobg.jpeg';
import './HeroStyle.css';
const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img'  src={introImg} alt="introImg" />
              
      </div>
      <div className='content'>
        <p>
          HI, I'M RAHUL MAITY, A PROGRAMMER..

        </p>
        <h1>
        full-stack developer.
        </h1>
        <div>
          <Link to="/project" className='btn'>projects</Link>
          <Link to="/contact" className='btn btn-light'>contact</Link>
      </div>

      </div>
      
    </div>
  )
}

export default HeroImg;
