import React from 'react'

const Nav = () => {
  return (
    <div className='flex gap-3 font-medium'>
        <a className='my-auto hover:cursor-pointer'>Features</a>
        <select className='border-transparent rounded hover:bg-gray-100'>
            <option>Compare</option>
        </select>
        <a className='my-auto hover:cursor-pointer'>Support</a>
        <select className='border-transparent rounded hover:bg-gray-100'>
            <option>Blog</option>
        </select>
    </div>
  )
}

export default Nav;