import React from 'react';
import './PageBody.css';
import Slide from './Slide';
import { useMedia } from './useMedia';
import { Loader } from './Loader';

const data = [{ media: "https://res.cloudinary.com/dr8w2gb6b/video/upload/v1721403086/video_5.mp4", loading: true },
{ media: "https://res.cloudinary.com/dr8w2gb6b/image/upload/v1721402908/6661.png", loading: true },
{ media: "https://res.cloudinary.com/dr8w2gb6b/image/upload/v1721402887/IMG_6662_fppo5y.png", loading: true },
{ media: "https://res.cloudinary.com/dr8w2gb6b/image/upload/v1721403708/IMG_6723_haxuos.png", loading: true }
]
function PageBody() {
  const mediaData = useMedia(data);
  return (
    <div className='pagebody'>
      <div className='leftcard'>
        <div className='uppercard'>
          <div className='campus_heading'>Our <span className='span'>Campus</span></div>
          <div className='Media'>
            {
              mediaData[0].loading ? <div className='loaderMediaParent'><Loader /></div> : <video className='video' autoPlay muted><source src={mediaData[0].media} type="video/mp4" /></video>
            }

          </div>
        </div>
        <div className='lowercard'>
          <p className='institue_heading'>Our Institues</p>
          <ul className='institue_content'>
            <li className='list'>L.J. Institute of Applied Sciences</li>
            <li className='list'>L.J. School of Architecture</li>
            <li className='list'>L.J. Institute of Engineering & Technology</li>
            <li className='list'>L.J. Institute of Media & Communication</li>
            <li className='list'>L.J. Integrated Management Program(MBA)</li>
            <li className='list'>& Many More..</li>
          </ul>
          <button className='admission'>Admission</button>
        </div>
      </div>
      <div className='rightcard'>
        <div className='rightcard_heading'>Colleges</div>
        <div className='carasouel'> <Slide data = {mediaData} /> </div>
      </div>
    </div>
  )
}

export default PageBody