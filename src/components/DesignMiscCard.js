import "./DesignMiscStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const DesignCard = (props) => {
  return (
        <div className="design-card">
                <img src={props.imgsrc} alt="image" />
                <h2 className="design-title">{props.title}</h2>
                <div className="design-details">
                    <p>{props.text}</p>
                    <div className="design-btns">
                        <NavLink to={props.view} className="btn">View</NavLink>
                    <div className="design-btns">
                        <NavLink to={props.source} className="btn">Source</NavLink>
                     </div>
                    </div>
                </div>
        </div>
    )
};

export default DesignCard;