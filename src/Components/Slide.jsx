import React from 'react';
import './Slide.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Loader } from './Loader';

function Slide({data}) {
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
          {
            data[1].loading ? <div className='loaderParent'><Loader/></div> : <img src={data[1].media} alt="1" className='slide_images'/>
          }  
        </SplideSlide>
        <SplideSlide>
          {
            data[2].loading? <div className='loaderParent'><Loader/></div> : <img src={data[2].media} alt="2" className='slide_images' />
          }
        </SplideSlide>
        <SplideSlide>
          {
            data[3].loading ? <div className='loaderParent'><Loader/></div> : <img src={data[3].media} alt="3" className='slide_images' />
          }
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default Slide