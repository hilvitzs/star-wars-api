import React from 'react';

export const FavoriteCounter = ({ count, onClick }) => {
  return(
    <div className='favorite'>
      <button className='show-favorites'
              onClick={}
              >Favorites: {count}</button>
    </div>
  )
}
