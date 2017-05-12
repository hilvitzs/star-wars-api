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
      favorites: [],
      cardData: [],
      counter: 0,
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

addFavorite(obj) {
  let newFavorite = obj
  let allFavorites = this.state.favorites
  allFavorites.push(newFavorite)
  this.setState({
    favorites: allFavorites
  })
}

removeFavorite(name) {
  const index = this.state.favorites.findIndex(card => card.name === name);
  this.state.favorites.splice(index, 1)
  this.setState({ favorites: this.state.favorites })
}

toggleFavorite(name) {
  if (!this.state.favorites.length){
    this.addFavorite(name)
  }
  this.state.favorites.map(card => {
    return card.name !== name ? this.addFavorite(name) : this.removeFavorite(name);
  })
}

countFavorites() {
  this.setState({
    counter: this.state.favorites.length
  })
}

renderFavorites(favorites) {
  return(
    favorites.map(favorite => {
      return(
        <div>
          {favorite}
        </div>
      )
    })
  )
}

  render() {
    return (
      <div className='app'>
        <aside className='side-scroll'>
          <Scroll scroll={this.state.scroll}/>
        </aside>
        <section className='main-container'>
          <h1>SWAPI-box</h1>
          <Buttons handleClick={this.handleClick.bind(this)}
                   count={this.state.counter}/>
          <CardHolder cardData={this.state.cardData}
                      addFavorite={this.addFavorite.bind(this)}
                      countFavorites={this.countFavorites.bind(this)}/>
        </section>
      </div>
    );
  }
}
