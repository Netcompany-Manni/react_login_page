import React from 'react';
import SingleAnswerComponent from './SingleAnswerComponent.js';
import './AnswerListComponentStyling.css';
class AnswerListComponent extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            correctAnswer : props.objekt.questionCorrect,
            chosenAnswer : "default",
            options : props.objekt.listOfAnswers,
            questionNummer : props.objekt.questionNummer,
            amountOfCorrectAnswers : 0,
            amountOfWrongAnswers : 0
        }
        this.setAnswerHasBeenChosen.bind(this);
    }
    
    setAnswerHasBeenChosen = (index) =>{
       if(this.state.chosenAnswer === this.state.options[index]){
           console.log('Du har allerede valgt dette alternativet')
       }
       else{{/*Another arrow function to make it synchroniously. Otherwise it will show last data, Async */}
        this.setState({chosenAnswer : this.state.options[index]}, ()=>{
            console.log(this.state.chosenAnswer)
            this.checkIfAnswerIsCorrect()
        });
       }
         
    }

    updateCorrectAnswers = () =>{
        this.setState({amountOfCorrectAnswers : this.state.amountOfCorrectAnswers+1})
    }

    updateWrongAnswers = () =>{
        this.setState({amountOfWrongAnswers : this.state.amountOfWrongAnswers+1})
    }

    checkIfAnswerIsCorrect = () =>{
        if(this.state.correctAnswer == this.state.chosenAnswer){
            this.updateCorrectAnswers()
            console.log('correct')
        }
        else{
            this.updateWrongAnswers()
            console.log('Wrong fam')
        }
    }

    render(){
        return (
            <div id="answer_list_component">
                {this.state.options.map((ettSvar, index)=>{
                    return <div> 
                        <SingleAnswerComponent 
                        svarAlternativ={ettSvar} 
                        index={index}
                        påKlikk={this.setAnswerHasBeenChosen}
                       
                        ></SingleAnswerComponent>
                        <hr></hr>
                    </div>
                })}
            </div>
        )
    }


}

export default AnswerListComponent;