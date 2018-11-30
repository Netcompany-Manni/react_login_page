import React from 'react';
import SingleAnswerComponent from './SingleAnswerComponent.js';
import './AnswerListComponentStyling.css';
import SubmitComponent from '../components/SubmitComponent.js';

class AnswerListComponent extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            correctAnswer : props.objekt.questionCorrect,
            chosenAnswer : null,
            questionNummer : props.objekt.questionNummer,
            amountOfCorrectAnswers : 0,
            amountOfWrongAnswers : 0
        }
        this.setAnswerHasBeenChosen.bind(this);
        }
    
    setAnswerHasBeenChosen = (index) =>{
        console.log('Last chosen Answer was ' +this.state.chosenAnswer)
       if(this.state.chosenAnswer === this.props.objekt.listOfAnswers[index]){
           console.log('Du har allerede valgt dette alternativet')
       }
       else{{/*Another arrow function to make it synchroniously. Otherwise it will show last data, Async */}
        this.setState({chosenAnswer : this.props.objekt.listOfAnswers[index]}, ()=>{
            console.log('Updated chosenAnswer to ' + this.state.chosenAnswer)
            this.checkIfAnswerIsCorrect()
        });
       }
         
    }

    checkIfAnswerIsCorrect = () =>{
        if(this.state.chosenAnswer === this.props.objekt.questionCorrect){
            console.log('You guessed ' + this.state.chosenAnswer + '. Correct!')
        }
        else{
            console.log('You guessed ' + this.state.chosenAnswer + ', but the correct answer was ' + this.props.objekt.questionCorrect)
        }
    }

    doShit = () =>{
        this.props.klikk(this.state.chosenAnswer, this.props.objekt.questionCorrect)
        this.setState({chosenAnswer : null}, () => {
            console.log('The current chosenAnswer is ' +this.state.chosenAnswer)
        })

    }

    render(){
        return (
            <div id="answer_list_component">
                {this.props.objekt.listOfAnswers.map((ettSvar, index)=>{
                    return <div> 
                        <SingleAnswerComponent 
                        svarAlternativ={ettSvar} 
                        index={index}
                        påKlikk={this.setAnswerHasBeenChosen}
                       
                        ></SingleAnswerComponent>
                        <hr></hr>
                    </div>
                })}
                {/*Dette er submit knappen under */}
               <div className="heleKnappen" onClick={() => this.doShit()}>
               <p>Neste</p>
               </div>

                </div>
        )
    }


}

export default AnswerListComponent;