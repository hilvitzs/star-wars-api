import React from 'react';
import { Cards } from '../Cards/Cards';
import './CardHolder.css'

export const CardHolder = ({ people, vehicles, planets, handleClick }) => {
  return (
    <div>
      <section className="card-container">
        { people.map( (person, index) => {
          return(
            <div key={index}>
              <Cards person={person}
                     index={index}
                     handleClick={(arg) => this.fetchData(arg)} />
            </div>
          )
        })}
      </section>
      <section className="card-container">
        { vehicles.map( (vehicle, index) => {
          return(
            <div key={index}>
              <Cards vehicle={vehicle}
                     index={index}
                     handleClick={(arg) => this.fetchData(arg)} />
            </div>
          )
        })}
      </section>
      <section className="card-container">
        { planets.map( (planet, index) => {
          return(
            <div key={index}>
              <Cards planet={planet}
                     index={index}
                     handleClick={(arg) => this.fetchData(arg)} />
            </div>
          )
        })}
      </section>
    </div>
  )
}
