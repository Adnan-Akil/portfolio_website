import React from 'react'
import '../components/Navbar'
import background_image from '/background-image.png'
import HeroSection from '../HeroSection/HeroSection'

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen flex relative">
        <img src={background_image} alt='' className='absolute justify-center items-center bottom-[10%] z-[-1] blur-sm object-cover'/>
        <HeroSection />
      </div>
    </div>
  )
}

export default Home
