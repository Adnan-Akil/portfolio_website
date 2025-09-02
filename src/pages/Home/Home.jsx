import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import ScrollSection from '../../components/ScrollSection/ScrollSection'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="main-page">
        <p>ADNAN AKIL</p>
        <ScrollSection/>
      </div>
    </div>
  )
}

export default Home