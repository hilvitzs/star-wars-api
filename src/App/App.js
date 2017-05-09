import React, { Component } from 'react';
import './App.css';
import { Scroll } from './Components/Scroll/Scroll'
import { Button } from './Components/Buttons/Buttons'

export default class App extends Component {
  constructor() {
    super()
    this.state ={
      scroll: {},
      people: {},
      vehicles: {},
      planets: {},
    }
  }

getTitleScroll() {
fetch('http://swapi.co/api/films/1')
  .then( response => response.json())
  .then( scroll => {
    this.setState({scroll: scroll})
  })
  .catch( error => alert('There was an error in your request.'))
}

getPeople() {
  fetch('http://swapi.co/api/people')
    .then( response => response.json())
    .then( people => {
      this.setState({people: people})
    })
    .catch( error => alert('There was an error in your request.'))
}

getVehicles() {
  fetch('http://swapi.co/api/vehicles')
    .then( response => response.json())
    .then( vehicles => {
      this.setState({vehicles: vehicles})
    })
    .catch( error => alert('There was an error in your request.'))
}

getPlanets() {
  fetch('http://swapi.co/api/planets')
    .then( response => response.json())
    .then( planets => {
      this.setState({planets: planets})
    })
    .catch( error => alert('There was an error in your request.'))
}

componentWillMount () {
  this.getTitleScroll();
  this.getPeople();
  this.getVehicles();
  this.getPlanets();
}

  render() {
    return (
      <div className="App">
        <h1>SWAPI-box</h1>
        <aside>
          <Scroll scroll={this.state.scroll}/>
        </aside>
        <section className='buttons-container'>
          <Buttons className='button1' onClick={this.getPeople().bind(this)} />
          <Buttons className='button2' onClick={this.getPlanets().bind(this)} />
          <Buttons className='button3' onClick={this.getVehicles().bind(this)} />
        </section>
      </div>
    );
  }
}
