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

  onClick () {
    this.props.addFavorite();
    this.props.countFavorites();
  }

  render() {
    return(
    <div className='card'>
      <button onClick={() => {this.onClick()}}>favorite</button>
      <p>Name: {this.props.vehicleInfo.name}</p>
      <p>Model: {this.props.vehicleInfo.model}</p>
      <p>Class: {this.props.vehicleInfo.vehicle_class}</p>
      <p>Passengers: {this.props.vehicleInfo.passengers}</p>
    </div>
    )
  }
}
