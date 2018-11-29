import React from 'react';
import './SingleAnswerComponentStyling.css';

class SingleAnswerComponent extends React.Component{

    constructor(props){
        super();
        this.state = {
            hasBeenClicked : false
        }
    }

    render(){
        return(
            <div className={"single_answer_body " + (this.state.hasBeenClicked ? "clicked" :  "unclicked")}
            onClick={()=>{this.props.påKlikk(this.props.index)}} >

        <div className="questionText">
        {this.props.svarAlternativ} 
        </div>

         </div>
        )
        
        
    }

    updateBackground = () =>{
        this.setState({
            hasBeenClicked : !this.state.hasBeenClicked
        })
    }
    
}


export default SingleAnswerComponent;