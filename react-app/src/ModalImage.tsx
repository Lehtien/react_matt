import React from 'react';
import './ModalImage.scss';

interface Props {
  image_url: string
  closeModal: () => void
}
const ModalImage = (props: Props) => {
  return (
    <div className='modal__wrapper'>
      <div className='modal' onClick={() => props.closeModal()}>
        <img className='modal__image' src={props.image_url} />
      </div>
    </div>
  );
};

export default ModalImage;