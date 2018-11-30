import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import BodyComponent from './components/BodyComponent.js';
import AnswerListComponent from './components/AnswerListComponent.js';
import ResultDisplayerComponent from './components/ResultDisplayerComponent.js';
import ClipLoader from 'react-spinners/ClipLoader'
import './components/ClipLoaderStyling.css'; {/* Currently not being used */}
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
      displayResultPage : false,
      dataForResultDisplayerComponent : []
    }
    this.tryToGetNextQuestion.bind(this);
  }

  componentDidMount(){
    this.getDataFromAPI();
    
  }

 getArrayWithRiktigeOgFeil = () => {
  var listOfData = [];
  listOfData[0] = this.state.antallRiktige;
  listOfData[1] = this.state.antallFeil
  return listOfData;
 }

  render() {
    if(this.state.displayResultPage === true){
      return(
        <div>
            <ResultDisplayerComponent dataArray={this.state.dataForResultDisplayerComponent}></ResultDisplayerComponent>
        </div>
      ) 
    }

    if(this.state.hasLoadedData){
      return(<div className="App" hidden={this.state.displayResultPage}> {/*If there is no more questions, and resultPage should show, this should be hidden*/}
      <HeaderComponent title={this.state.questions[this.state.index].questionNummer}></HeaderComponent>
      <BodyComponent question={this.state.questions[this.state.index].questionTekst}></BodyComponent>

      <AnswerListComponent objekt={this.state.questions[this.state.index]} klikk={this.tryToGetNextQuestion}></AnswerListComponent>
     
      
     </div>)
    }
    else{
     
      return(
        <ClipLoader
          className='clipLoader'
          sizeUnit={"px"}
          size={550}
          color={'#123abc'}></ClipLoader>
      )
    }
  }

 tryToGetNextQuestion = (chosenAnswer, correctAnswer) => {
   
   if (chosenAnswer === null) {
     console.log('Ingen svar har blitt valgt')
   } else {
     console.log('Du valgte ' +chosenAnswer + ' og riktig svar var ' +correctAnswer)
     if (this.chosenAnswerWasCorrect(chosenAnswer,correctAnswer)) {
       this.setState({antallRiktige:this.state.antallRiktige + 1}, () =>{
       console.log('Your answer was correct. antallRiktige is now at ' +this.state.antallRiktige)
       })
     }
     else{
      this.setState({antallFeil:this.state.antallFeil + 1}, () =>{
        console.log('Your answer was wrong. antallFeil is now at ' +this.state.antallFeil)
        })
     }

    var maxIndex = this.state.questions.length - 1;
    if (maxIndex != this.state.index) {
     this.setState({index : this.state.index + 1})
    } else {
      console.log('Ingen flere spørsmål') 
      this.setState({displayResultPage : true}, () =>{
        this.displayResultPage()
      })
      
    }
    
   }
   
 }

 displayResultPage = () =>{
   this.setState({dataForResultDisplayerComponent : this.getArrayWithRiktigeOgFeil()}, () =>{
     console.log('displayResultPage is now ' + this.state.displayResultPage)
   })
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
 
  skrivUtCurrentStats = () => {
    console.log('Antall feil : ' + this.state.antallFeil)
    console.log('Antall riktige : ' + this.state.antallRiktige)
  }

}

export default App;