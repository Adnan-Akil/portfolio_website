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
          
          <div className='absolute left-8 top-[400px] notable text-white rounded-sm overflow-hidden shadow-lg border border-white/20 bg-white/10 backdrop-blur-md p-4 z-10 cursor-pointer select-none hover:text-black' onClick={() => window.open("https://docs.google.com/document/d/1IPi8XP3y3HRDvhk53APDmaLPIqBYFl2AI0-E5_ExS3E/edit?usp=sharing", "_blank")}><p>Here's my CV</p></div>
          
          <PreviewCards />
        </div>
    </div>
  )
}


export default Home
