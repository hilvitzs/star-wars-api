import React from 'react';
import './Scroll.css';

export const Scroll = ({ scroll }) => {
  return (
    <div className='scroll-text-container'>
      <div className='scroll-text-content'>
        <p>{scroll.title}</p>
        <p>{scroll.opening_crawl}</p>
        <p>{scroll.release_date}</p>
      </div>
    </div>
  )
}
