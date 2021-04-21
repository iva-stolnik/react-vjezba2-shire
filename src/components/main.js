import React from 'react';
import '../App.css';
import Smaug from "./images/smaug.png";

const main = ({isActive}) => {
    return (
        <div className="main">
            <img src={Smaug} alt="smaug" className={isActive ? "smaug" : "smaugHidden"}/>
        </div>
    )
}

export default main;
