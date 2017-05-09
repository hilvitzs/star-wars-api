import React from 'react';

export const Scroll = ({ scroll }) => {
  return (
    <div>
      <p>{scroll.opening_crawl}</p>
      <p>{scroll.title}</p>
      <p>{scroll.release_date}</p>
    </div>
  )
}
