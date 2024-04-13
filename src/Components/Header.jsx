import React, { useState, useEffect } from 'react';
import img from '../Assets/LJLogoWithBg.png';
import img1 from '../Assets/LJKU-Logo.jpeg'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
function Header() {
  const [isMobile, setisMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () =>{
      setisMobile(window.innerHeight <= 600);
    };
    window.addEventListener('resize',handleResize);
    return()=>{
      window.removeEventListener('resize',handleResize);
    };
  }, [])

  return (
    <div className='header'>
      <div className='logo'><Link to='/'><img className='logoImage' src={isMobile?img1:img} alt='LOGO'></img></Link></div>
      <div className='NavigationBar'>{
        isMobile ? <div > <i class="fa-solid fa-bars"></i></div>:
        <>
        <div> <NavLink to='/' className={({ isActive }) => `${isActive ? "active" : ""} NavLink`}>Home </NavLink> </div>
        <div> <NavLink to='/about' className={({ isActive }) => `${isActive ? "active" : ""} NavLink`}>About Us</NavLink> </div>
        <div> <NavLink to='/academics' className={({ isActive }) => `${isActive ? "active" : ""} NavLink`}>Academics </NavLink> </div>
        <div> <NavLink to='/placements' className={({ isActive }) => `${isActive ? "active" : ""} NavLink`}>Placements</NavLink> </div>
        <div> <NavLink to='/contact' className={({ isActive }) => `${isActive ? "active" : ""} NavLink`}>Contact</NavLink> </div>
        <div> <button className='button'>SignIn</button> </div>
        </>
      }
      </div>
    </div>
  )
}

export default Header

// Explanation:

// 1) useEffect(() => {...}, []);
// The useEffect hook is used for side effects in functional components. It is similar to lifecycle methods in class components.
// The second argument ([]) is an array of dependencies. When the dependencies change, the effect runs. An empty array means it runs once when the component mounts and cleans up when the component unmounts.

// 2) const handleResize = () => {...};
// This is a function named handleResize that gets the current window width and updates the isMobile state based on whether the width is less than or equal to 600 pixels.

// 3) window.addEventListener('resize', handleResize);
// Adds an event listener to the resize event on the window object.
// When the browser window is resized, the handleResize function will be called.

// 4) return () => {...};
// This is the cleanup function. It runs when the component is about to unmount.
// It removes the event listener to prevent potential memory leaks.

// Explanation Flow:
// When the component (Header) mounts, the useEffect hook runs, adding the handleResize function as an event listener for the resize event.
// If the window is resized, the handleResize function is called, updating the isMobile state.
// When the component is about to unmount (be removed from the DOM), the cleanup function removes the event listener to avoid memory leaks.