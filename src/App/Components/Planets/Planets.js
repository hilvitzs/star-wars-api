import React, { Component } from 'react';
// import './Planets.css'

export default class Planets extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      terrain: '',
      population: '',
      climate: '',
      residents: ''
    }
  }

  componentWillMount() {
    
  }

  fetchData(arg) {
    fetch(`http://swapi.co/api/${arg}/`)
      .then( response => response.json())
      .then( values =>
        this.setState({ [arg]: values.results})
      )
  }

  fetchSecondaryData(url) {
    fetch(url)
      .then( response => response.json())
      .then( values =>
        this.setState({ [arg]: values.results})
      )
  }

}
