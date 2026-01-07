import React from 'react'
import HeroSection from '../components/HeroSection'
import PreviewCards from '../components/PreviewCards'
import ParticlesBackground from '../components/ParticlesBackground'

const Home = () => {
  return (
    <main className="w-full relative min-h-screen flex flex-col items-center">
      {/* Background Layer */}
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <img
          src='/mclarenF1Background.png'
          alt="Background"
          className='w-full h-full object-cover blur-sm opacity-60 scale-100'
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <ParticlesBackground />
      </div>

      {/* Content Wrapper */}
      <div className="w-full flex-grow flex flex-col items-center justify-center lg:h-screen lg:overflow-hidden pt-12 pb-4 gap-6 sm:gap-10">
        <HeroSection />
        <PreviewCards />
      </div>
    </main>
  )
}

export default Home
