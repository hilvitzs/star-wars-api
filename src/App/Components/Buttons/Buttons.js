import React from 'react'
import './Buttons.css'

export const Buttons = ({ handleClick }) => {
  return(
    <div className='buttons-container'>
      <button className='button btn1' onClick={() => {handleClick('people')}}>people</button>
      <button className='button btn2' onClick={() => {handleClick('vehicles')}}>vehicles</button>
      <button className='button btn3' onClick={() => {handleClick('planets')}}>planets</button>
    </div>
  )
}
