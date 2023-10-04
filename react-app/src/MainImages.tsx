import React, { useState, useRef } from 'react';
import './MainImages.scss';
import ModalImage from "./ModalImage"

const MainImages = () => {
  const items: string[] = [];
  for (let i = 1; i <= 20; i++) {
    items.push(`${process.env.PUBLIC_URL}/images/main/IMG_${i}.webp`);
  }

  const [imageUrl, setImageUrl] = useState('');
  const [targetTop, setTargetTop] = useState(0);
  const getImageUrl = (event: React.MouseEvent<HTMLElement>) => {
    const image_url = event.currentTarget.getAttribute("src") || '';
    setImageUrl(image_url);
  }
  const closeModal = () => {
    setImageUrl('');
  }

  const main_images = useRef<HTMLDivElement>(null);
  const initClassName: string = "main__image";
  setInterval(() => {
    const n: number = Math.floor(Math.random() * items.length);
    const el = main_images.current?.children[n];
    if (el) {
      el.className = `${initClassName} rotate__image`;
      setTimeout(() => {
        el.className = initClassName
      }, 2000);
    }
  }, 15000);

  return (
    <div className='main__images__wrapper'>
      <div className='main__images' ref={main_images}>
        {items.map((item, i) => <img className="main__image" src={item} alt="main-image" key={i} onClick={getImageUrl} />)}
      </div>
      {imageUrl !== '' && <ModalImage image_url={imageUrl} closeModal={closeModal} />}
    </div>
  );
};

export default MainImages;