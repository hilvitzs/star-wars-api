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

  componentDidMount() {
    fetchData()
    fetchHomeworld(url)
    fetchSpecies(url)
  }

    fetchData() {
      fetch(`http://swapi.co/api/people/`)
      .then( response => response.json())
      .then( values =>
        this.setState({ [arg]: values.results})
      )
    }

    fetchHomeworld(url) {
      fetch(url)
      .then( response => response.json())
      .then( values =>
        this.setState({
          homeworld: values.name,
          population: values.population
        })
      )
    }

    fetchSpecies(url) {
      fetch(url)
      .then( response => response.json())
      .then( values =>
        this.setState({ [arg]: values.results})
      )
    }




}
