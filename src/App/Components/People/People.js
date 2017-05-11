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
    fetchHomeworld(this.props.personInfo.homeworld)
    fetchSpecies(this.props.personInfo.species)
  }

    fetchHomeworld(url) {
      fetch(url)
      .then( response => response.json())
      .then( values => {
        console.log(values)
        this.setState({
          homeworld: values.name,
          population: values.population
        })
      })
    }

    fetchSpecies(url) {
      fetch(url)
      .then( response => response.json())
      .then( values => {
        console.log(values)
        this.setState({ species: values.species})
      })
    }

    render() {
      return(
        <div className='card'>
          <p>Name: {this.state.name}</p>
          <p>Homeworld: {this.state.homeworld}</p>
          <p>Species: {this.state.species}</p>
          <p>Population of Homeworld: {this.state.population}</p>
        </div>
      )
    }



}
