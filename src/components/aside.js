import React from 'react';

const aside = ({hobbitDay}) => {
    return (
        <div className="aside">
            <ul>
                <h3>Hobbit week:</h3>
                {hobbitDay}
            </ul>
        </div>
    )
}

export default aside;
