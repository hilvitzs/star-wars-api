import React from 'react'
import './Buttons.css'

export const Buttons = ({ handleClick, count }) => {
  return(
    <div className='buttons-container'>
      <button className='show-favorites' onClick={(e) => {handleClick(e)}}>Favorites: {count}</button>
      <button className='button btn1' onClick={(e) => {handleClick(e)}}>people</button>
      <button className='button btn2' onClick={(e) => {handleClick(e)}}>vehicles</button>
      <button className='button btn3' onClick={(e) => {handleClick(e)}}>planets</button>
    </div>
  )
}
