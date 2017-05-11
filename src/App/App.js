import React, { Component } from 'react';
import './App.css';
import { Scroll } from './Components/Scroll/Scroll';
import { Buttons } from './Components/Buttons/Buttons';
import { CardHolder } from './Components/CardHolder/CardHolder';
import { FavoriteCounter } from './Components/FavoriteCounter';

export default class App extends Component {
  constructor() {
    super()
    this.state ={
      scroll: [],
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
      cardData: [],
      counter: 0,
      name: ''
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

handleClick(e) {
  const buttonName = e.currentTarget.textContent
  this.setState({
    cardData: this.state[buttonName]
  })
}

componentDidMount() {
  this.getTitleScroll();
}

componentWillMount() {
  let array = ['people', 'planets', 'vehicles']
  array.forEach(call => {
    fetch(`http://swapi.co/api/${call}/`)
      .then(response => response.json())
      .then(values =>
        this.setState({ [call]: values.results})
      )
      .catch(error => 'There was an error fetching data')
  })
}

addFavorite(e) {
  this.state.favorites.push(e)
  this.setState({
    favorites: this.state.favorites
  })
}

countFavorites() {
  this.setState({
    counter: this.state.favorites.length
  })
}

  render() {
    return (
      <div className='app'>
        <FavoriteCounter count={this.state.counter} />
        <aside className='side-scroll'>
          <Scroll scroll={this.state.scroll}/>
        </aside>
        <section className='main-container'>
          <h1>SWAPI-box</h1>
          <Buttons handleClick={this.handleClick.bind(this)} />
          <CardHolder cardData={this.state.cardData}
                      addFavorite={this.addFavorite.bind(this)}
                      countFavorites={this.countFavorites.bind(this)}/>
        </section>
      </div>
    );
  }
}
