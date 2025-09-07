import React from 'react'
import background_image from '/background-image.png'

const Background = () => {
  return (
    <div>
      <img src={background_image} alt='' className='fixed justify-center items-center bottom-[10%] z-[-1] blur-sm object-cover'/>
    </div>
  )
}

export default Background
