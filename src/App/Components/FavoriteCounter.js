import React from 'react';

export const FavoriteCounter = ({ count }) => {
  return(
    <div className='favorite'>
      <p>Favorites Count: {count}</p>
    </div>
  )
}
