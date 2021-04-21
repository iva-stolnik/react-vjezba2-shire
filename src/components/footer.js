import React from 'react';

const footer = ({changeColor, isActive}) => {
   
    return (
     
        <div className={isActive ? "footer2" : "footer"}>
            <p onClick={changeColor} className="footerParagraph">Never laugh at live dragons!</p>
        </div>
      
    )
}

export default footer;
