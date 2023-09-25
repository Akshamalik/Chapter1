import React from 'react'
import Image from "next/image"
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className=" p-4 px-28 h-12">
      <div className="container mx-auto flex justify-between items-center">

        <div className="w-36">

          <img src="/slice1.png" alt="error" width="280px" />
        </div>


        <ul className="space-x-10 flex text-lg">
          <li><Link href="/" className="text-black py-1">Home</Link></li>
          <li><Link href="/About" className="text-black py-1">About Me</Link></li>
          <li><Link href="/Services" className="text-black py-1">Services</Link></li>
          <li><Link href="/Projects" className="text-black py-1">Projects</Link></li>
          <li><Link href="/Testimonials" className="text-black py-1">Tetimonials</Link></li>
          <li><Link href="/Contact" className="text-black py-1">Contact</Link></li>
          <button className="text-white bg-orange-400 h-7 py-1 rounded px-4  text-center mx-1"><Link href="/">Download CV</Link></button>
        </ul>
      </div>
    </nav>
  )
}
