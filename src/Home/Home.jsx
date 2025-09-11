import React from 'react'
import HeroSection from '../components/HeroSection'
import PreviewCards from '../components/PreviewCards'


const Home = () => {
  return (
    <div>
        <div className="w-screen h-screen flex relative">
          <img src='/f1_bg.png' className='select-none absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1] blur-sm object-contain w-screen ' />
          <div className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-t from-black/40 border-0 z-[-2]" />
          <HeroSection />
          <PreviewCards />
        </div>
    </div>
  )
}


export default Home
