import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <div>
      <div className="w-full top-0 left-0 flex fixed rounded-md transition-colors justify-center content-start h-auto backdrop-blur-lg z-50 select-none">
        <ul className='text-white mt-[8px] transition-colors flex space-x-48 text-[24px] items-center'>
          <li className='cursor-pointer'>[About Me]</li>
          <li className='cursor-pointer'>[Projects]</li>
          <li className='cursor-pointer'>[Skills]</li>
          <li className='cursor-pointer'>[Contact Me]</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
