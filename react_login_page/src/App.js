import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import BodyComponent from './components/BodyComponent.js';
import AnswerListComponent from './components/AnswerListComponent.js';

const apiUrl = 'https://api.jsonbin.io/b/5bfe8cd790a73066ac16d79a/2';
class App extends Component {

  constructor(){
    super();
    this.state = {
      questions : [],
      hasLoadedData : null,
      chosenAnswer : null,
      index : 0,
      antallRiktige : 0,
      antallFeil : 0,
      antallSpørsmål : this.state.questions.length
    }
    this.tryToGetNextQuestion.bind(this);
  }

 


  componentDidMount(){
    this.getDataFromAPI();
    
  }

  render() {
   
    if(this.state.hasLoadedData){
      return(<div className="App">
      <HeaderComponent title={this.state.questions[this.state.index].questionNummer}></HeaderComponent>
      <BodyComponent question={this.state.questions[this.state.index].questionTekst}></BodyComponent>

      <AnswerListComponent objekt={this.state.questions[this.state.index]} klikk={this.tryToGetNextQuestion}></AnswerListComponent>
     
      
     </div>)
    }
    else{
      {/*Få det til å vise en spinner her */}
      return <p>Sorry bror</p>
    }
  }


 tryToGetNextQuestion = (chosenAnswer, correctAnswer) => {
   if (chosenAnswer === null) {
     console.log('Ingen svar har blitt valgt')
   } else {
     console.log('Du valgte ' +chosenAnswer + ' og riktig svar var ' +correctAnswer)
     if (this.chosenAnswerWasCorrect(chosenAnswer,correctAnswer)) {
       this.setState({antallRiktige:this.state.antallRiktige+1}, () =>{
       console.log('Your answer was correct. antallRiktige is now at ' +this.state.antallRiktige)
       })
     }
    
    var maxIndex = this.state.questions.length - 1; {/* Legg til et objekt med informasjon i et array som kan brukes på slutten */}
  
    if (maxIndex != this.state.index) {
     this.setState({index : this.state.index + 1})
    } else {
      console.log('Ingen flere spørsmål') 
      {/*TODO: Vis poengsum */}
    }
    
   }

 }

 chosenAnswerWasCorrect (chosenAnswer,correctAnswer){
   return chosenAnswer == correctAnswer ? true : false;
 }

  updateStates = (data) =>{
  this.setState({
    questions : data,
    hasLoadedData : true
  })
  console.log(this.state.questions[this.state.index])
  }

  getDataFromAPI = () => {
    
    fetch(apiUrl)
    .then(res => res.json())
    .then(json => {
      console.log("Success");
      this.updateStates(json);

    });
  }

  displayNextQuestion = () =>{
    
  }

  

}

export default App;