import React from 'react';
import { Link } from 'react-router-dom';
import img2 from "../assets/10.jpg";
import img1 from "../assets/9.jpg";
import "./AboutContent.css";
const AboutContent = () => {
  return (
    <div className='about'>
          <div className='left'>
              <h1>Who Am I?</h1>
              <p>I am a full-stack developer, and competitive programmer. I create responsive websites using MERN</p>
        <Link to="/contact">
          <button className='btn'>Contact</button>
              </Link>
          </div>
          <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={img2} alt="img1" className='img' />

          </div>
          <div className='img-stack bottom'>
            <img src={img1} alt="img2" className='img' />

          </div>
              </div>
          </div>
      
    </div>
  )
}

export default AboutContent
