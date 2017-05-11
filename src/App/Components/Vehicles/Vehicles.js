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

  render() {
    return(
    <div className='card'>
      <p>Name: {this.props.vehicleInfo.name}</p>
      <p>Model: {this.props.vehicleInfo.model}</p>
      <p>Class: {this.props.vehicleInfo.vehicle_class}</p>
      <p>Passengers: {this.props.vehicleInfo.passengers}</p>
    </div>
    )
  }
}
