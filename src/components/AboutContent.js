import "./AboutContentStyles.css"

import React from 'react';
import { Link } from "react-router-dom";

import about from "../assests/About.jpg";
import about2 from "../assests/About2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Dedicated, quick learning, & cooperative student who actively participates in community-oriented organizations.</p>
            <p>Excels in problem-solving, mediating disputes, & showing leadership to encourage involvement.</p>
            <p>Able to work independently with minimum supervision but also likes to take part in group interactions.</p>
            <p>Enjoys teaching, learning user experience & software development concepts, giving back, making a positive impact, and meeting new people.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className = "img-stack top">
                    <img src={about2} className="img" alt="true"/>
                </div>
                <div className = "img-stack bottom">
                    <img src={about} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>

  )
}

export default AboutContent;