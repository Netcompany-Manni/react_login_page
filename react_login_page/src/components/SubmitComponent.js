import React from 'react';

const submitComponent = (props) =>{
    return(
        <div className="heleKnappen" onClick={() => {props.klikk()}}>
        <p>{props.tekst}</p>
        </div>
    )
};


export default submitComponent;