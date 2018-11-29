import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import BodyComponent from './components/BodyComponent.js';
import AnswerListComponent from './components/AnswerListComponent.js';
import SubmitComponent from './components/SubmitComponent.js';

const apiUrl = 'https://api.jsonbin.io/b/5bfe8cd790a73066ac16d79a/2';
class App extends Component {

  constructor(){
    super();
    this.state = {
      questions : [],
      hasLoadedData : null,
      chosenAnswer : null,
      index : 0,
    }
    this.getNextQuestion.bind(this);
    

  }

  componentDidMount(){
    this.getDataFromAPI();
    
  }

  render() {
   
    if(this.state.hasLoadedData){
      return(<div className="App">
      <HeaderComponent title={this.state.questions[this.state.index].questionNummer}></HeaderComponent>
      <BodyComponent question={this.state.questions[this.state.index].questionTekst}></BodyComponent>

      <AnswerListComponent objekt={this.state.questions[this.state.index]}></AnswerListComponent>
     
      <SubmitComponent tekst="Neste spørsmål" klikk={this.tryToGetNextQuestion}></SubmitComponent>
     </div>)
    }
    else{
      {/*Få det til å vise en spinner her */}
      return <p>Sorry bror</p>
    }
  }

 

 tryToGetNextQuestion = () => {

 }

 getNextQuestion = () => {
   var maxIndex = this.state.questions.length-1
   
   if(maxIndex != this.state.index){
    this.setState({index : this.state.index+1})
   }
   else{
     console.log('Ingen flere spørsmål')
   }
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