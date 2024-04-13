import React from 'react';
import './Slide.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import img1 from '../Assets/IMG_6661.png';
import img2 from '../Assets/IMG_6662.png';
import img3 from '../Assets/IMG_6723.png';
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
          <img src={img1} alt="1" className='slide_images'/>
        </SplideSlide>
        <SplideSlide>
          <img src={img2} alt="2" className='slide_images'/>
        </SplideSlide>
        <SplideSlide>
          <img src={img3} alt="3" className='slide_images'/>
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default Slide