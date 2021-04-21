import React from 'react';
import Ring from "./images/oneRing.png";

const header = ({helloThere}) => {
    return (
        <div className="header">
            <img src={Ring} alt="oneRing" className="ring"/>
            <h1 className="title">{helloThere}</h1>
            <img src={Ring} alt="oneRing" className="ring2"/>
        </div>
    )
}

export default header;
