import Image from 'next/image';
import React from 'react'
import { Socials } from '@/data/socials';
import Link from 'next/link';
import { config } from '@/data/config';


export const metadata = {
  title: 'Peter Venton - BI that scales beyond dashboards',
  description: 'Microsoft Fabric & Power Platform expert building scalable BI ecosystems.',
}

const HeroMain = () => {
    return (
    <div className='flex flex-col gap-2 md:gap-4 lg:gap-5'>
      <p className='text-2xl sm:text-4xl lg:text-5xl leading-tight'>Hello,</p>
      <p className='text-3xl sm:text-6xl lg:text-7xl leading-tight'>I&apos;m <span className='font-bold'>Peter Venton</span></p>
      <p className='text-xl sm:text-3xl lg:text-4xl text-balance'>A Microsoft Fabric & Power Platform expert who builds data ecosystems, not just dashboards.</p>
      <p className='text-base sm:text-xl lg:text-2xl text-pretty'>I believe great in-house solutions start with structure. That means thoughtful data modeling, centralized measures, and a shared semantic layer that powers dashboards, apps, and insights with clarity and consistency. My goal is to help teams move beyond isolated reports and toward ecosystems that scale with their business.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/chat" className="rounded-xl bg-black px-4 py-2 text-white">Chat with my knowledge base</Link>
        <Link href="/work" className="rounded-xl border px-4 py-2">View Work</Link>
        {config.showGit && <Link href={Socials.Email.href} className="rounded-xl border px-4 py-2">Get In Touch</Link>}
      </div>
    </div>
  )
    
}

export default function Hero() {
  return (
    // header is 3.5rem tall so -3.5rem adjusts it so this is h-screen
    <div className='h-screen w-full mt-[-3.5rem] flex items-center justify-center p-8 relative'> 
      <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-30'>
            <HeroMain/>
            <div className="relative hidden lg:block lg:size-96 aspect-square ">
            <Image
                src={"/selfie.JPG"}
                alt="Full image"
                fill
                className="object-cover rounded-xl"
                priority
            />
            </div>
        </div>
    </div>
  )
}