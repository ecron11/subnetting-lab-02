import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from "./AppHeader";
import AppBody from "./AppBody";
import { findCIDRNotation } from "./Subnetting"

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      groups: [
        {name: "Marketing", 
        hosts: 25, 
        correct: true, 
        id:"Marketing1", 
        inputHandler: this.groupInputHandler,
        answerIndex: 0},
        {name: "Sales", 
        hosts: 56, 
        correct: true, 
        id:"Marketing1", 
        inputHandler: this.groupInputHandler,
        answerIndex: 1},
        {name: "IT", 
        hosts: 11, 
        correct: true, 
        id:"Marketing1", 
        inputHandler: this.groupInputHandler,
        answerIndex: 2}],
      answers: [
        "","",""
      ]
    }
  }

  //This function s attached to the input elements. When their values are changed, it updates the answers array
  groupInputHandler = (CIDRInput, answersIndex) => {
    this.setState(function(state, props) {
      let prevAnswers = state.answers;
      // console.log(prevAnswers);
      prevAnswers[answersIndex] = CIDRInput;
      // console.log(prevAnswers);
      return {
        answers: prevAnswers
      }
    }); 
  }
  
  //This function generates a new question and updates the DOM
  //TODO add remainder
  generateQuestion = () => {
    //Generates a number of hosts from 1 to 254
    let numHosts = Math.floor(Math.random() * 254) + 1
    let numGroups; 
    //Generates a number of groups from 1 to 6. If there are less than 6 hosts,
    //then it will only generate a maximum number of groups equal to the number of hosts.
    if (numHosts < 6) {
      numGroups = Math.floor(Math.random() * numHosts +1)
    } else numGroups = Math.floor(Math.random() * 6 +1)

    let groups = [];
    let answers = [];
    console.log(numGroups);
    //to ensure each group has at least one host in it, 
    //a single host is added for each group generated before the rest are randomly allocated
    for (let i = 0; i < numGroups; i++) {
      groups.push({
        name:"Group " + (i+1),
        hosts: 1,
        correct: false,
        id: Date.now(),
        inputHandler: this.groupInputHandler,
        answerIndex: i
      });
      console.log(groups);
      answers.push("");
      numHosts--;
    }

    for (let i = 0; i <= numGroups-1; i++) {
      //This randomly determines a number of hosts to the max of the hosts remaining
      let groupHosts = Math.floor(Math.random() * numHosts + 1)
      groups[i].hosts = groupHosts + 1;
      numHosts -= groupHosts;
    }

    //creates a leftover group
    groups.push({
      name:"Leftover IPs",
      hosts: numHosts,
      correct: false,
      id: Date.now(),
      inputHandler: this.groupInputHandler,
      answerIndex: answers.length
    })
    answers.push("");


    this.setState({
      checked: false,
      groups: groups, 
      answers: answers})
  }
  
  //This checks the users input against and sets the checked boolean. 
  //This will re-render the DOM to reflect the checked answers.
  checkAnswers = () => {
    this.setState(function(state, props){
      let answers = state.answers
      let newGroups = state.groups

      //checks the answers and sets the state
      newGroups.forEach(element => {
        if(findCIDRNotation(element.hosts, 24) === answers[element.answerIndex]) {
          console.log("test");
          element.correct = true;
        } else  element.correct = false;
      });
      return {
        groups: newGroups,
        checked: true
      }
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader checkAnswers={this.checkAnswers} generateQuestion={this.generateQuestion}/>
        <AppBody groups={this.state.groups} checked={this.state.checked}/>
      </div>
    )
  }
}

export default App
