import React, { Component } from 'react';
import './App.css';
import { Scroll } from './Components/Scroll/Scroll';
import { Buttons } from './Components/Buttons/Buttons';
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
  const getRandom = Math.floor(Math.random() * (8 - 1)) + 1;
  fetch(`http://swapi.co/api/films/${getRandom}`)
    .then( response => response.json())
    .then( scroll => {
      this.setState({scroll: scroll})
    })
}

fetchData(arg) {
  fetch(`http://swapi.co/api/${arg}/`)
    .then( response => response.json())
    .then( values =>
      this.setState({ [arg]: values.results})
    )
}

// promise.all()

componentDidMount () {
  this.getTitleScroll();
}

  render() {
    return (
      <div className="App">
        <h1>SWAPI-box</h1>
        <Buttons className='button1' handleClick={(arg) => this.fetchData(arg)} />
        <aside>
          <Scroll scroll={this.state.scroll}/>
        </aside>
        <section>
          <CardHolder people={this.state.people}
                      vehicles={this.state.vehicles}
                      planets={this.state.planets} />
        </section>
        <section className='buttons-container'>
        </section>
      </div>
    );
  }
}
