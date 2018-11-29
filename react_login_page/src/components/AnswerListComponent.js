import React from 'react';
import SingleAnswerComponent from './SingleAnswerComponent.js';
import './AnswerListComponentStyling.css';
class AnswerListComponent extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            chosenAnswer : null,
            lokalListeMedSvar : props.listeMedSvar
        }
    }
    
    setAnswerHasBeenChosen = (index) =>{
        this.setState({chosenAnswer : this.state.lokalListeMedSvar[index]})
        console.log(this.state.chosenAnswer)
    }

    setCardBackgroundColor = (index) =>{
       {/*What to do? */}
    }

    render(){
        return (
            <div id="answer_list_component">
                {this.state.lokalListeMedSvar.map((ettSvar, index)=>{
                    return <div> 
                        <SingleAnswerComponent 
                        svarAlternativ={ettSvar} 
                        index={index}
                        påKlikk={this.setAnswerHasBeenChosen}
                        påBakgrunnKlikk={this.setCardBackgroundColor}
                        ></SingleAnswerComponent>
                        <hr></hr>
                    </div>
                })}
            </div>
        )
    }


}

export default AnswerListComponent;