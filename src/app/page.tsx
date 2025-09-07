import Image from 'next/image';
import React from 'react'
import { Socials } from '@/data/socials';
import Link from 'next/link';


export const metadata = {
  title: 'Peter Venton - BI that scales beyond dashboards',
  description: 'Microsoft Fabric & Power Platform expert building scalable BI ecosystems.',
}

const HeroMain = () => {
    return(
    <div className='flex flex-col gap-5'>
        <p className='text-5xl gap-0'>Hello,</p>
        <p className='text-7xl'>I&apos;m <span className='font-bold'>Peter Venton</span></p>
        <p className='text-4xl text-balance'>A Microsoft Fabric & Power Platform expert who builds data ecosystems, not just dashboards.</p>
        <p className='text-2xl text-pretty'>I believe great in-house solutions start with structure. That means thoughtful data modeling, centralized measures, and a shared semantic layer that powers dashboards, apps, and insights with clarity and consistency. My goal is to help teams move beyond isolated reports and toward ecosystems that scale with their business.</p>
        <div className="mt-6 flex gap-3">
        <Link href="/work" className="rounded-xl border px-4 py-2">View Work</Link>
        <Link href={Socials.Email.href} className="rounded-xl bg-black px-4 py-2 text-white">Get In Touch</Link>
        </div>
    </div>
    )
    
}

export default function Hero() {
  return (
    // header is 3.5rem tall so -3.5rem adjusts it so this is h-screen
    <div className='h-screen mt-[-3.5rem] flex flex-col items-center justify-center p-8 relative'> 
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
    </div>
  )
}