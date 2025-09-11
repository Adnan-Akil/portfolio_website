import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <div>
      <div className="w-full top-0 left-0 flex fixed transition-colors justify-center content-start h-auto backdrop-blur-lg z-50 select-none">
        <ul className='text-white mt-[8px] transition-colors flex space-x-48 text-[24px] items-center'>
          <li className='cursor-pointer hover:text-black transition-transform duration-150 hover:scale-125' onClick={() => window.open('https://github.com/Adnan-Akil', "_blank")}>[Github]</li>
          <li className='cursor-pointer hover:text-black transition-transform duration-150 hover:scale-125' onClick={() => window.open('https://www.linkedin.com/in/adnan-akil-28057a356/', "_blank")}>[LinkedIn]</li>
          <li className='cursor-pointer hover:text-black transition-transform duration-150 hover:scale-125' onClick={() => window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=aakil5522@gmail.com&body=Hi%20Adnan",
          "_blank")}>[Email Me]</li>
        </ul>
      </div>
    </div>
  ) 
}

export default Navbar
