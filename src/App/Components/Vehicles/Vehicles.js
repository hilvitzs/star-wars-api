import React, { Component } from 'react';
// import './Vehicles.css'

export default class Vehicles extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      model: '',
      vehicle_class: '',
      passengers: '',
    }
  }

  componentDidMount() {
    fetchData('vehicles')
  }

  fetchData(arg) {
    fetch(`http://swapi.co/api/${arg}/`)
      .then( response => response.json())
      .then( values =>
        values.map(vehicle => {
          this.setState({
            name: vehicle.name,
            model: vehicle.model,
            vehicle_class: vehicle.vehicle_class,
            passengers: vehicle.passengers
          })
        })
      )
  }

  render() {
    return(
    <div key={index} className='card'>
      <p>Name: {this.state.name}</p>
      <p>Model: {this.state.model}</p>
      <p>Class: {this.state.vehicle_class}</p>
      <p>Passengers: {this.state.passengers}</p>
    </div>
    )
  }
}
