import "./FooterStyles.css";

import React from 'react';

import{FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div classname="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>Sacramento,</p>
                        <p>California,</p>
                        <p>USA</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                            +1 (916) 934-4301
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                            soreaasmai@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>
                    About Me
                 </h4>
                <p>Aspiring Front-End & UX Engineer</p>
                 <div className="social">
                    <a href="https://github.com/sorea19">
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem" }}
                    />
                    </a>  
                    <a href="https://www.linkedin.com/in/sorea-asmai/">                 
                     <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem" }}
                     />
                     </a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;