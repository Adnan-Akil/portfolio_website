import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <div>
      <div className="w-full top-0 left-0 flex fixed rounded-md transition-colors justify-center content-start h-auto backdrop-blur-lg">
        <ul className='text-white mt-[8px] transition-colors flex space-x-48 text-[24px] items-center'>
          <li>[About Me]</li>
          <li>[Projects]</li>
          <li>[Skills]</li>
          <li>[Contact Me]</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
