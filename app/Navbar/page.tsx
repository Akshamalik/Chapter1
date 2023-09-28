import React from 'react'
import Image from "next/image"
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className=" p-4 ">


      <div className=" container flex justify-between items-center">

        <img src="/slice1.png" alt="error" className='h-9' />



        <ul className="space-x-10 flex text-lg">
          <li><Link href="/" className="text-black  hover:text-orange-500 ">Home</Link></li>
          <li><Link href="/About" className="text-black  hover:text-orange-500">About Me</Link></li>
          <li><Link href="/Services" className="text-black  hover:text-orange-500">Services</Link></li>
          <li><Link href="/Projects" className="text-black  hover:text-orange-500">Projects</Link></li>
          <li><Link href="/Testimonials" className="text-black  hover:text-orange-500 ">Tetimonials</Link></li>
          <li><Link href="/Contact" className="text-black hover:text-orange-500">Contact</Link></li>
          <button className="text-white bg-orange-400  py-2 rounded px-4 text-sm hover:rounded-full font-semibold transition duration-200 ease-in-out"><Link href="/">Download CV</Link></button>
        </ul>
      </div>

    </nav>
  )
}
