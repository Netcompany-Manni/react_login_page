import React from 'react';
import './ResultDisplayerComponentStyling.css';
const resultDisplayerComponent = (props) =>{
    return(
        <div className='resultShower'>
            <p className='mannisSpesial'> Antall Riktige : {props.dataArray[0]}</p>
            <p className='mannisSpesial'> Antall Feil : {props.dataArray[1]}</p>
            
        </div>
    )
}

export default resultDisplayerComponent; 