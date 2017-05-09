import React, { Component } from 'react';
import './App.css';
import { Scroll } from './Components/Scroll/Scroll';
import { Button } from './Components/Buttons/Buttons';
import { CardHolder } from './Components/CardHolder/CardHolder';

export default class App extends Component {
  constructor() {
    super()
    this.state ={
      scroll: [],
      people: [],
      vehicles: [],
      planets: [],
      display: 'home'
    }
  }

getTitleScroll() {
  fetch('http://swapi.co/api/films/1')
    .then( response => response.json())
    .then( scroll => {
      this.setState({scroll: scroll})
    })
}

fetchData(arg) {
  fetch(`http://swapi.co/api/${arg}`)
    .then( response => response.json())
    .then( values =>
      this.setState({ [arg]: values.results})
    )
}

// promise.all()

componentDidMount () {
  this.getTitleScroll();
  this.fetchData('people')
  this.fetchData('vehicles')
  this.fetchData('planets')
}

  render() {
    return (
      <div className="App">
        <h1>SWAPI-box</h1>
        <aside>
          <Scroll scroll={this.state.scroll}/>
        </aside>
        <section>
          <CardHolder people={this.state.people} />
        </section>
        <section className='buttons-container'>
          {/* <Buttons className='button1' handleClick={this.getPeople().bind(this)} />
          <Buttons className='button2' handleClick={this.getPlanets().bind(this)} />
          <Buttons className='button3' handleClick={this.getVehicles().bind(this)} /> */}
        </section>
      </div>
    );
  }
}
