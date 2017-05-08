import React, { Component } from 'react';
import './App.css';
import { CardHolder } from './Components/CardHolder/CardHolder'

export default class App extends Component {
  constructor() {
    super()
    this.state ={
      data: []
    }
  }

  componentDidMount () {
    fetch('http://swapi.co/api/people/1')
      .then( response => this.setState({data: response}))
      .catch( error => console.log('There was an error in your request'))
  }

  render() {
    return (
      <div className="App">
        <h1>SWAPI-box</h1>
        <CardHolder data={this.state.data}/>
      </div>
    );
  }
}
