import React, { useRef, useEffect } from 'react';
import './Introduction.scss';

const Introduction = () => {
  const today: Date = new Date();
  const birth: Date = new Date(2014, 5, 6);
  const diff = today.getTime() - birth.getTime();
  const age = Math.floor(Math.abs(diff) / (365 * 24 * 60 * 60 * 1000))
  return (
    <div className='introduction'>
      <p id="introduction">name: matthew</p>
      <p>age: {age}</p>
      <p>birthday: May</p>
      <p>favorite: OyAtSu, kArikaRi</p>
    </div>
  );
};

export default Introduction;