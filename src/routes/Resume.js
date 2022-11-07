import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResumeText from '../components/ResumeText'
import HeroImg2 from '../components/HeroImg2';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Resume" text="Aspiring Front-End Developer" />
      <ResumeText/>
      <Footer />
    </div>
  )
}

export default Resume;