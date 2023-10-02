import React, { useState } from 'react';
import './MainImages.scss';
import ModalImage from "./ModalImage"

const MainImages = () => {
  const items: string[] = [];
  for (let i = 1; i <= 20; i++) {
    items.push(`/images/main/IMG_${i}.webp`);
  }
  
  const [imageUrl, setImageUrl] = useState('');
  const getImageUrl = (event: React.MouseEvent<HTMLElement>) => {
    const image_url = event.currentTarget.getAttribute("src") || '';
    setImageUrl(image_url);
  }
  const closeModal = () => {
    setImageUrl('');
  }

  return (
    <div className='main__images__wrapper'>
      <div className='main__images'>
        {items.map((item, i) => <img className="main__image" src={item} alt="top-image" key={i} onClick={getImageUrl}/>)}
      </div>
      {/* { imageUrl !== '' &&  <ModalImage image_url={imageUrl} closeModal={closeModal}/> } */}
    </div>
  );
};

export default MainImages;