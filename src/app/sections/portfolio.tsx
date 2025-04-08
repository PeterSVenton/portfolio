import React from 'react'

type PortfolioProps = {}

const Portfolio = (props: PortfolioProps) => {
  return (
    <section>
        <h1 className='text-5xl font-medium text-center mb-4'>Portfolio</h1>
        <div className='flex justify-center'>
        <div className='grid grid-cols-4 gap-2 w-[80%]'>
        {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='w-80 h-80 aspect-square bg-amber-200' />
))}

        </div>
        </div>


    </section>
  )
}

export default Portfolio