import React from 'react'
import Home from './Home/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden text-white">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
