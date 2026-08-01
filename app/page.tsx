import Image from 'next/image'
import React from 'react'
import Hero from './component/Hero'
import Cards from './component/Cards'
import Button from './component/Button'


const page = () => {
  return (
    <div>
     <div className="image">
      <Image 
     src="/hero.png"
     fill
     alt='Background Image'
     quality={100}
     priority
     className='-z-10 max-h-screen'
     />
     
     
     </div>
     <Hero />
     <Cards />
     
      
    </div>
  )
}

export default page