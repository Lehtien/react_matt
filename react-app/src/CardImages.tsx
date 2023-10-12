import React from 'react';
import './CardImages.scss';

const CardImages = () => {
  const items: string[] = [];
  const fortunes: string[] = [];
  for (let i = 1; i <= 5; i++) {
    const n = Math.floor(Math.random() * 100); // 0~99
    if(n < 7) {
      fortunes.push("大吉");
    } else if(7 <= n && n < 20) {
      fortunes.push("中吉");
    } else if(20 <= n && n < 50) {
      fortunes.push("小吉");
    } else if(50 <= n && n < 75) {
      fortunes.push("末吉");
    } else if(75 <= n && n < 90) {
      fortunes.push("凶");
    } else if(90 <= n) {
      fortunes.push("大凶");
    }

    items.push(`${process.env.PUBLIC_URL}/images/card/${i}.webp`);
  }


  return (
    <div className='card__wrapper'>
      {items.map((items, i) =>
        <div className='card' key={i}>
          <div className="back">
            <img className="card__image__back" src={`${process.env.PUBLIC_URL}/images/card/tr.webp`} alt="back" />
          </div>
          <div className="front">
            <img className="card__image" src={items} alt="front" />
          </div>
          <div className='fortune'>
            <span>{fortunes[i]}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardImages;