import React from 'react';
import './Cards.css'

export const Cards = ({ person, vehicle, planet, index }) => {

  if(person) {
    return(
    <div key={index} className='card'>
      <p>Name: {person.name}</p>
      <p>Homeworld: {person.homeworld}</p>
      <p>Species: {person.species}</p>
      <p>Population: {person.population}</p>
    </div>
    )
  } else if(vehicle) {
    return(
    <div key={index} className='card'>
      <p>Name: {vehicle.name}</p>
      <p>Model: {vehicle.model}</p>
      <p>Class: {vehicle.vehicle_class}</p>
      <p>Passengers: {vehicle.passengers}</p>
    </div>
    )
  } else if(planet) {
    return(
    <div key={index} className='card'>
      <p>Name: {planet.name}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      <p>Climate: {planet.climate}</p>
      <p>Residents: {'Hello'}</p>
    </div>
    )
  }
}
