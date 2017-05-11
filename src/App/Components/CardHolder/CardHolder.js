import React from 'react';
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';
import './CardHolder.css'

export const CardHolder = ({ cardData, addFavorite, countFavorites }) => {
  if (cardData) {
    const cards = cardData.map((card, index) => {
      if (card.birth_year) {
        return(
          <People personInfo={card}
                  key={index}
                  addFavorite={addFavorite}
                  countFavorites={countFavorites}/>
        )
      } else if (card.climate) {
        return(
          <Planets planetInfo={card}
                   key={index}
                   addFavorite={addFavorite}
                   countFavorites={countFavorites} />
        )
      }else {
        return(
          <Vehicles vehicleInfo={card}
                    key={index}
                    addFavorite={addFavorite} 
                    countFavorites={countFavorites} />

        )
      }
    })
    return(
      <div className='card-container'>
        {cards}
      </div>
    )
  }
};
