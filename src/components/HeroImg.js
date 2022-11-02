import "./HeroImgStyles.css";
import HeroImgBackground from "../assests/HeroImgBackground.jpg";
import React from 'react';
import {Link} from "react-router-dom";
 
 const HeroImg = () => {
   return (
     <div className="hero">
        <div className="mask">
             <img className="HeroImgBackground"
             src= {HeroImgBackground} alt="HeroImgBackground"/>
        </div>
        <div className="content" >
            <p>
                PORTFOLIO OF
            </p>
            <h1>Sorea Asmai</h1>
            <div>
                <Link to ="/project" className="btn">Projects</Link>
                <Link to ="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div> 
     </div>
   )
 }
 
 export default HeroImg;