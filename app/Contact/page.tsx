import React from 'react'
import Navbar from '../Navbar/page'

export default function page() {
  return (
    <div>
    <Navbar/>
    <div className='text-center p-16 px-20'>
    <h1 className='font-bold text-5xl'>Lets Design Together</h1>
    <p className='font-normal p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt ea, ullam maxime, quos atque voluptatibus officiis qui omnis repellendus animi labore suscipit in laborum quo illo exercitationem eveniet quam.</p>
    </div>
    <div className='flex justify-center'>
    

     
      <input className="shadow appearance-none border rounded  py-3 px-5 w-96 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Your Email"/>
    
    
    <button className='bg-orange-500 text-white px-4 mx-6 rounded-lg w-40'>Contact Me</button>
    </div>
    <div className='bg-gray-50 '>
    <div className='flex justify-center p-14'>
       <img  src="/slice1.png" alt="" width='230px' />
    </div>
    <div className='flex justify-center space-x-10 list-none text-lg'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>Contact</li>
    </div>
    <div className='text-center p-32'>
    <span>
    &#169; 2023 <span className='text-orange-500 text-lg font-bold'>Mumair</span> All Right Reserved, Inc.
    </span>
    </div>
    </div>
    </div>
  )
}
