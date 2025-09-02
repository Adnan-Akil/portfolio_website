import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href={import.meta.env.VITE_GITHUB} target="_blank" className='link'>Github</a></li>
          <li><a href={import.meta.env.VITE_LINKEDIN} target="_blank" className='link'>LinkedIn</a></li>
          <li><a href={import.meta.env.VITE_GMAIL} target="_blank" className='link'>Email</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar