import React from 'react';
import { Cards } from '../Cards/Cards';
import './CardHolder.css'

export const CardHolder = ({ people, vehicles, planets }) => {
  return (
    <div>
      <section card-container>
        { people.map( (person, index) => {
          return(
            <div key={index}>
              <Cards person={person} index={index}/>
            </div>
          )
        })}
      </section>
      <section>
        { vehicles.map( (vehicle, index) => {
          return(
            <div key={index}>
              <Cards vehicle={vehicle} index={index}/>
            </div>
          )
        })}
      </section>
      <section>
        { planets.map( (planet, index) => {
          return(
            <div key={index}>
              <Cards planet={planet} index={index}/>
            </div>
          )
        })}
      </section>
    </div>
  )
}
