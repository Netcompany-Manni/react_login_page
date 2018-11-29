import React from 'react';
import './BodyComponentStyling.css';
const bodyComponent = (props) =>{
    return(
        <div className="body_component">
            {props.question}
        </div>
    )
}

export default bodyComponent;