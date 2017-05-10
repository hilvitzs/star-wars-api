import React from 'react';

export const Cards = ({ person, vehicle, planet, index }) => {
  if(person) {
    return(
    <div key={index} className='card'>
      <p>Name: {person.name}</p>
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
      {/* <p>{planet.residents}</p> */}
    </div>
    )
  }
}
