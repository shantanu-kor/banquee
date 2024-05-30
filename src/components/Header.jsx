import React from 'react'
import Nav from './header/Nav';
import User from './header/User';

const Header = () => {
  return (
    <div className='flex justify-between py-4 px-5 font-[sans-serif]'>
        <div className='text-3xl font-bold text-[#5BB5A2]'>banquee.</div>
        <Nav />
        <User />
    </div>
  )
}

export default Header;