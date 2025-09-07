import React from 'react'
import '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Background from '../components/Background'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen flex relative">
        <div className="fixed bottom-0 left-0 w-full h-[104px] bg-gradient-to-t from-black/70 border-0 z-[-1]" />
        <HeroSection />
      </div>
        <section><p>About Me!</p></section>
        <section><p>Projects!</p></section>
        <section><p>Skill!</p></section>
    </div>
  )
}

export default Home
