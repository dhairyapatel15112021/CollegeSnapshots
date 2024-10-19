import React from 'react';
import './Footer.css';
function Footer() {

  return (
    <div className='footer'>
      <div className='text'> <span>&copy;</span> All Rights Reserved By LJKU</div>
      <div className='icons_bar'>
        <div><i className="fa-brands fa-facebook-f"></i></div>
        <div><i className="fa-brands fa-instagram"></i></div>
        <div><i className="fa-brands fa-x-twitter"></i></div>
        <div><i className="fa-brands fa-linkedin-in"></i></div>
        <div><i className="fa-brands fa-youtube"></i></div>
      </div>
    </div>
  )
}

export default Footer