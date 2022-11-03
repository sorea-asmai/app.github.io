import "./UpcomingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom";

const UpcomingCard = () => {
  return (
    <div className="project-type">
      <div className = "card-container">


        <div className="card">
          <h3>- Languages -</h3>
          <span className="bar"></span>
          <p className="btc">Java</p>
          <p>- Python -</p>
          <p>- HTML/CSS -</p>
          <p>- JavaScript -</p>
          <p>- C -</p>
          <Link to = "/contact" className = "btn">View</Link>
       </div>

       <div className="card">
          <h3>- Upcoming -</h3>
          <span className="bar"></span>
          <p className="btc">Projects</p>
          <p>- React JS -</p>
          <p>- Game in Java -</p>
          <p>- Figma Prototypes -</p>
          <p>- Senior Project -</p>
         <Link to = "/contact" className = "btn">View</Link>
       </div>

       <div className="card">
          <h3>- Certifications -</h3>
          <span className="bar"></span>
          <p className="btc">3</p>
          <p>- CodePath's Introduction to Software Engineering -</p>
          <p>- Dell Client Course -</p>
          <p>- McDonald’s Operation Technology Person -</p>
          <Link to = "/contact" className = "btn">View</Link>
       </div>

      </div>
    </div>
  )
};

export default UpcomingCard;