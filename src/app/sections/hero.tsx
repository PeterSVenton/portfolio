"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { MoveDown } from 'lucide-react';



const HeroMain = () => {
    return(
    <div className='flex flex-col gap-5'>
        <p className='text-5xl gap-0'>Hello,</p>
        <p className='text-7xl'>I&apos;m <span className='font-bold'>Peter Venton</span></p>
        <p className='text-4xl text-balance'>A Microsoft Fabric & Power Platform expert who builds data ecosystems, not just dashboards.</p>
        <p className='text-2xl text-pretty'>I believe great in-house solutions start with structure. That means thoughtful data modeling, centralized measures, and a shared semantic layer that powers dashboards, apps, and insights with clarity and consistency. My goal is to help teams move beyond isolated reports and toward ecosystems that scale with their business.</p>
    </div>
    )
    
}

const Hero = () => {
    const [userHasScrolled, setUserHasScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 10) {
            setUserHasScrolled(true)
          }
        }
    
        window.addEventListener('scroll', handleScroll)
        
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])
  return (
    <div className='h-screen flex flex-col items-center justify-center p-8 relative'>
        <div className='flex gap-30 justify-center items-center'>
            <HeroMain/>
            <div className="relative h-96 aspect-square">
            <Image
                src={"/selfie.JPG"}
                alt="Full image"
                fill
                className="object-cover rounded-xl"
                priority
            />
            </div>
        </div>

        <div className={`absolute bottom-8 transition-opacity duration-700 ease-in-out ${userHasScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <div className='flex justify-center align-center animate-bounce'>
            <p>Scroll</p>
            <MoveDown/>
            </div>
        </div>
    </div>
  )
}

export default Hero