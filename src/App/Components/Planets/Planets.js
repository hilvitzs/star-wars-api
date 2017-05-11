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
      residents: []
    }
  }

  componentWillMount() {
    this.fetchSecondaryData(this.props.planetInfo.residents);
  }

  fetchSecondaryData(residents) {
    residents.forEach( resident => {
      fetch(resident)
        .then( response => response.json())
        .then( resident =>
          this.setState({
            name: this.props.planetInfo.name,
            terrain: this.props.planetInfo.terrain,
            population: this.props.planetInfo.population,
            climate: this.props.planetInfo.climate,
            residents: this.state.residents.concat(resident.name)})
        )
        console.log(this.state.residents);
    })
  }


  render() {
    return(
      <div className='card'>
        <p>Name: {this.props.planetInfo.name}</p>
        <p>Terrain: {this.props.planetInfo.terrain}</p>
        <p>Population: {this.props.planetInfo.population}</p>
        <p>Climate: {this.props.planetInfo.climate}</p>
        <p>Residents: {this.props.planetInfo.residents.length ? this.state.residents.join(', ') : 'None'}</p>
      </div>
    )
  }
}
