import React from 'react'
import '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../Sections/About'
import Projects from '../Sections/Projects'
import Skills from '../Sections/Skills'
import Contact from '../Sections/Contact'


const Home = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <section id="home" className="h-screen snap-start">
        <div className="w-screen h-screen flex relative">
          <img src='/background-image.png' alt='' className='absolute justify-center items-center bottom-[10%] z-[-1] blur-sm object-cover'/>
          <div className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-t from-black/60 border-0 z-[-1]" />
          <HeroSection />
        </div>
      </section>
      <section className="h-screen snap-start"><About /></section>
      <section className="h-screen snap-start"><Projects /></section>
      <section className="h-screen snap-start"><Skills /></section>
      <section className="h-screen snap-start"><Contact /></section>
    </div>
  )
}


export default Home
