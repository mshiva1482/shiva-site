import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';
import ContactPage from './Components/ContactUs/ContactPage';
import Section from './Components/Section/Section';
import SectionV2 from './Components/SectionV2/SectionV2';

import awsCert from './Resources/certification-badge.png';
import planet from './Resources/exoplanetProject.svg';
import cctv from './Resources/cctv.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div class="link-container">
        <a href="https://github.com/mshiva1482" target="_blank">GitHub</a>
        <span>/</span>
        <a href="https://www.linkedin.com/in/mshiva1482/" target="_blank">LinkedIn</a>
        <span>/</span>
        <a href="https://leetcode.com/kactus/" target="_blank">LeetCode</a>
      </div>
      <SectionV2 imageSrc = {awsCert} header = "AWS Certified Solutions Architect Associate" paragraph = "This certification has equipped me with a comprehensive understanding of designing distributed systems optimizing performance, and ensuring the security and reliability of applications on the AWS platform." width="250px" height="250px" linkName = "badge >" link = "https://www.credly.com/badges/57fa9f5e-82ea-4e70-b9ea-20fe953b2ed7/public_url"/>
      <Section imageSrc = {planet} header = "Exoplanet detection" paragraph = "A machine learning model that predicts whether a celestial object in question is an exoplanet or not." width="250px" height="250px" linkName = "GitHub >" link = "https://github.com/mshiva1482/ExoplanetDetection"/>
      <SectionV2 imageSrc = {cctv} header = "Face Recognition on CCTV footage" paragraph = "Software designed to detect faces in a given CCTV video footage and compare it with a query image to check if they match. Suitable for identifying suspects in a crime scene. It is capable of work on poor quality images and images taken under unfavorable lighting conditions." width="250px" height="250px"/>
      <ContactPage />
    </div>
    
  );
}

export default App;
