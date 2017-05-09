import React from 'react';
import { Cards } from '../Cards/Cards';

export const CardHolder = ({ people }) => {
  return (
    <section >
      {people.map( person => {
        return(
          <div>
            <Cards person={people} />
          </div>
        )
      })}
    </section>
  )
}
