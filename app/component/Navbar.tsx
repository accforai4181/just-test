import Link from 'next/link'
import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <div>
        <nav className='flex z-10 justify-between px-[10%] pt-12 items-center'>
            <div className=" text-3xl font-bold">Alex <span className='text-orange-600'>Gym</span> </div>
            <ul className='flex gap-4'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/login">Contact</Link></li>
                <li><Link href="/">Blog</Link></li>
            </ul>
            <Button data={"Contact Us"} />

           
        </nav>
    </div>
  )
}

export default Navbar