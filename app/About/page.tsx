import React from 'react'
import Navbar from '../Navbar/page'
import Image from 'next/image'

export default function AboutMe() {
    return (
       
       <div>
        <Navbar/>
        <div className='flex flex-wrap mt-9 p-4 items-center mx-auto'>
            <div className='w-1/3'>
                 <img src="/slice3.png" alt="" width="480px" />
            </div>
            <div className='w-2/3 px-10 '>
                 <h1 className='text-6xl font-bold py-6 '>About Me</h1>
                 <p className='text-left text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste id ipsa modi, ipsam cupiditate quam praesentium deserunt temporibus aspernatur iusto corporis beatae debitis incidunt officia nisi voluptate aliquid, tempora neque?</p>
                 <h3 className='text-xl mt-3 font-bold'>UX</h3>
                 <img  src="/slice4.png" alt="" />
                 <h3 className='text-xl mt-3 font-bold'
                 >Website Design</h3>
                 <img   src="/slice5.png" alt=""/>
                 <h3 className='text-xl mt-3 font-bold'>App Design</h3>
                 <img src="/slice6.png" alt="" />
                 <h3 className='text-xl mt-3 font-bold'>Graphic Design</h3>
                 <img src="/slice7.png" alt="" />
            </div>
        </div>
       </div>
    )
}
