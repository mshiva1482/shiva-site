import React from 'react';
import './HeroSection.css'
import myImage from '../../Resources/programmer.svg';

const fileUrl = 'http://localhost:3000/resume.pdf';

const HeroSection = () => {
  const downloadFileAtURL = (url) => {

  } 

  return (
    <div className="hero-section">
      <div className="content">
        <p className= "head">machine learning engineer.</p>
        <p className='para'>Hi I'm shiva. A machine learning engineer based in India. Passionate about creating data driven pipelines to help optimise businesses.</p>
        {/* <p className='linkk'>See my works</p> */}
        <div class="works-section">
            <a href='resume.pdf' download="resume.pdf" >Download CV</a>
            <div class="arrow-animation">
                <div class="arrow"></div>
            </div>
        </div>
      </div>
      <div className="image">
        <img src={myImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;
