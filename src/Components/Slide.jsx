import React from 'react';
import './Slide.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Slide() {
  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
  };
  return (
    <div>
      <Splide aria-label="MyImages" options={options} className='slide_component'>
        <SplideSlide>
          <img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1721402908/6661.png" alt="1" className='slide_images'/>
        </SplideSlide>
        <SplideSlide>
          <img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1721402887/IMG_6662_fppo5y.png" alt="2" className='slide_images' />
        </SplideSlide>
        <SplideSlide>
          <img src="https://res.cloudinary.com/dr8w2gb6b/image/upload/v1721403708/IMG_6723_haxuos.png" alt="3" className='slide_images' />
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default Slide