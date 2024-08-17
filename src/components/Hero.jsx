import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero() {
  useGSAP(() => {
      gsap.to(".hero-title", { opacity:1,delay:1.5,duration:1 })
  })

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-col flex-center '>
        <p className='hero-title'>iphone 15 pro</p>
      </div>
    </section>
  )
}

export default Hero