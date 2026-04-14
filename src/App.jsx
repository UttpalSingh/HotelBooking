import React, { useEffect } from 'react'
import Hero from './Main/Hero'


const App = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default App
