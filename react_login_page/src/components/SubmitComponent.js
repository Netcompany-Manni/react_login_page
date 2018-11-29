import React from 'react';
import './SubmitComponentStyling.css';

const submitComponent = (props) =>{
    return(
        <div className="heleKnappen" onClick={() => {props.klikk()}}>
        <p>{props.tekst}</p>
        </div>
    )
};

export default submitComponent;