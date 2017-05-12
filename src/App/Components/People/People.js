import React, { Component } from 'react';
// import './People.css'

export default class People extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      homeworld: '',
      species: '',
      population: '',
    }
  }

  componentWillMount() {
    this.fetchHomeworld(this.props.personInfo.homeworld)
    this.fetchSpecies(this.props.personInfo.species)
  }

    fetchHomeworld(url) {
      fetch(url)
      .then( response => response.json())
      .then( values => {
        this.setState({
          name: this.props.personInfo.name,
          homeworld: values.name,
          population: values.population
        })
      })
    }

    fetchSpecies(url) {
      fetch(url)
      .then( response => response.json())
      .then( values => {
        this.setState({ species: values.name})
      })
    }

    onClick () {
      console.log(this.props.personInfo)
      this.props.toggleFavorite(this.props.personInfo);
      this.props.countFavorites();
    }


    render() {
      return(
        <div className='card'>
          <button onClick={() => {this.onClick()}}>favorite</button>
          <p>Name: {this.state.name}</p>
          <p>Homeworld: {this.state.homeworld}</p>
          <p>Species: {this.state.species}</p>
          <p>Population: {this.state.population}</p>
        </div>
      )
    }



}
