import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '[Github]', link: 'https://github.com/Adnan-Akil' },
    { name: '[LinkedIn]', link: 'https://www.linkedin.com/in/adnan-akil-28057a356/' },
    { name: '[Email Me]', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=aakil5522@gmail.com&body=Hi%20Adnan' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-white/5">
      <div className="text-white font-bold text-xl ubuntu-mono cursor-pointer hover:text-orange-500 transition-colors">
        Adnan.dev //
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 text-lg text-white ubuntu-mono">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-orange-400 transition-transform hover:scale-105"
            onClick={() => window.open(item.link, "_blank")}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 gap-8 md:hidden shadow-2xl">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="list-none text-xl text-white ubuntu-mono cursor-pointer hover:text-orange-400"
              onClick={() => {
                window.open(item.link, "_blank");
                setIsOpen(false);
              }}
            >
              {item.name}
            </li>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
