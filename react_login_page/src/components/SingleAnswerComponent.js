import React from 'react';
import './SingleAnswerComponentStyling.css';

class SingleAnswerComponent extends React.Component{

    constructor(props){
        super();
        this.state = {
            hasBeenClicked : false,
            index : props.index,
            svarAlternativ : props.svarAlternativ
        }
    }

    render(){
        return(
            <div className={"single_answer_body " + (this.state.hasBeenClicked ? "clicked" :  "unclicked")} 
             onClick={this.props.påBakgrunnKlikk(this.state.index)}>

        <div className="questionText" 
        onClick={()=>this.props.påKlikk(this.state.index)}>
        {this.state.svarAlternativ} 
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