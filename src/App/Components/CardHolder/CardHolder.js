import React from 'react';

export const CardHolder = ({ data }) => {
  return (
    <div>
      <p>{data.opening_crawl}</p>
      <p>{data.title}</p>
      <p>{data.release_date}</p>
    </div>
  )
}
