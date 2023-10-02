import React from 'react';
import './TopImages.scss';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';

const TopImages = () => {
  const items: string[] = [];
  for (let i = 1; i <= 6; i++) {
    items.push(`/images/top/${i}.webp`);
  }

  return (
    <Splide
      options={{
        type: 'loop',
        padding: '3rem',
      }}
      aria-label="トップ写真"
      className='top__images'
    >
      {items.map((item, i) => <SplideSlide key={i}><img className="top__image" src={item} alt="top-image" /></SplideSlide>)}
    </Splide>
  );
};

export default TopImages;