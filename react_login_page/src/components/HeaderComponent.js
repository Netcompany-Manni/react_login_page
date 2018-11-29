import React from 'react';
import './HeaderComponentStyling.css';

const headerComponent = (props) =>{
    return(
        <div className="header_component">
            <p>
                {props.title}
            </p>
        </div>
    )
}

export default headerComponent;