import React from 'react'

export const Buttons = ({ handleClick }) => {
  return(
    <div>
      <button onClick={() => {handleClick('people')}}>people</button>
      <button onClick={() => {handleClick('vehicles')}}>vehicles</button>
      <button onClick={() => {handleClick('planets')}}>planets</button>
    </div>
  )
}
