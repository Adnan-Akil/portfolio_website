import React from 'react'
import '../components/Navbar'
import background_image from '/background-image.png'
import HeroSection from '../HeroSection/HeroSection'

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen flex relative">
        <img src={background_image} alt='' className='absolute justify-center items-center bottom-[10%] z-[-1] blur-sm object-cover'/>
        <div className="absolute bottom-0 left-0 w-full h-[104px] bg-gradient-to-t from-black/70 border-0 z-[-1]" />
        <HeroSection />
      </div>
    </div>
  )
}

export default Home
