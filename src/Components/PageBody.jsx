import React from 'react';
import './PageBody.css';
import Slide from './Slide';

function PageBody() {
  return (
    <div className='pagebody'>
      <div className='leftcard'>
        <div className='uppercard'>
          <div className='campus_heading'>Our <span className='span'>Campus</span></div>
          <div className='Media'>
            <video className='video' autoPlay muted>
              <source src="https://res.cloudinary.com/dr8w2gb6b/video/upload/v1721403086/video_5.mp4" type="video/mp4" />
            </video>
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
        <div className='carasouel'> <Slide/> </div>
      </div>
    </div>
  )
}

export default PageBody