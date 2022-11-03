import React from 'react'
import Navbar from '../components/Navbar';
import Designing from '../components/Design';
import Footer from '../components/Footer';
import DesignCard from '../components/DesignMiscCard';
import HeroImg2 from '../components/HeroImg2';

const Design = () => {
    return (
      <div>
        <Navbar />
        <HeroImg2 heading = "DESIGNS" text ="Some of my most recent works"/>
        <Designing />
        <Footer/>
      </div>
    )
  }
  
  export default Design;