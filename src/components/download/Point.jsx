import React from 'react';
import check from '../../assets/download/check.png';

const Point = ({point}) => {
  return (
    <div className='flex'>
        <img src={check} className='bg-blue-300 rounded-full mr-4' />
        <span>{point}</span>
    </div>
  )
}

export default Point;