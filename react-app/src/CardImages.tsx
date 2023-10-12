import React from 'react';
import './CardImages.scss';

// interface Props {
//   image_url: string
// }
const CardImages = () => {
  const items: string[] = [];
  for (let i = 1; i <= 5; i++) {
    items.push(`${process.env.PUBLIC_URL}/images/card/${i}.webp`);
  }


  return (
    <div className='card__wrapper'>
      {items.map((items, i) =>
        <div className='card'>
          <div className="back">
            <img className="card__image__back" src={`${process.env.PUBLIC_URL}/images/card/tr.webp`} alt="back" key={`back_${i}`} />
          </div>
          <div className="front">
            <img className="card__image" src={items} alt="front" key={i} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardImages;