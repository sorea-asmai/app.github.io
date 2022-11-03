import "./DesignMiscStyles.css";
import DesignCard from "./DesignMiscCard";
import DesignCardData from "./DesignMiscData";

import React from 'react';

const Design = () => {
  return (
    
    <div className = "top-container" >
         <h1 className="design-heading">Under Construction...</h1>
        <div className="design-container">
            {DesignCardData.map((val, ind)=>{
                return(
                    <DesignCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                );
            })}
         </div>
    </div>
  )
};

export default Design;