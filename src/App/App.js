import React, { Component } from 'react';
import './App.css';
import { CardHolder } from './Components/CardHolder/CardHolder'

export default class App extends Component {
  constructor() {
    super()
    this.state ={
      data: {}
    }
  }

getTitleScroll () {
fetch('http://swapi.co/api/films/1')
  .then( response => response.json())
  .then( data => {
    this.setState({data: data})
  })
  .catch( error => alert('There was an error in your request.'))
}

componentWillMount () {
  this.getTitleScroll();
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
