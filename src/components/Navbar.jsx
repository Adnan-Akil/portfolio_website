import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <div>
      <div className="w-full top-0 left-0 flex fixed transition-colors justify-center content-start h-auto backdrop-blur-lg z-50 select-none">
        <ul className='text-white mt-[8px] transition-colors flex space-x-48 text-[24px] items-center'>
          <li className='cursor-pointer hover:text-gray-400 transition-transform duration-150 hover:scale-125'>[About Me]</li>
          <li className='cursor-pointer hover:text-gray-400 transition-transform duration-150 hover:scale-125'>[Projects]</li>
          <li className='cursor-pointer hover:text-gray-400 transition-transform duration-150 hover:scale-125'>[Skills]</li>
          <li className='cursor-pointer hover:text-gray-400 transition-transform duration-150 hover:scale-125'>[Contact Me]</li>
        </ul>
      </div>
    </div>
  ) 
}

export default Navbar
