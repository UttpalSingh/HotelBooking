import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Img from '../components/ImageArea/Img'
import TextArea from '../components/TextArea/TextArea'

const Hero = () => {
  return (
<div className='h-screen relative'>
    {/* main */}
    <Img/>
    {/* navbar */}
    <Navbar/>
    {/* textArea */}
    <TextArea/>

    <div className='h-60 w-full bg-white'>Hi I am react</div>
</div>
  )
}

export default Hero
