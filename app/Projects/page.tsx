import React from 'react'
import Navbar from '../Navbar/page'

export default function Projects() {
  return (
    <div>
      <Navbar />

      <div className='text-center mt-16 '><h1 className='text-5xl font-bold'>My Projects</h1>
        <p className='text-lg font-normal mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officiis quidem ab itaque, cum facere atque, molestias odio molestiae similique consequatur voluptate tempora!</p>
        <div className='flex justify-center space-x-4 mt-6 text-black'>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500 hover:text-white'>All</button>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500 hover:text-white'>UI/UX</button>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500 hover:text-white'>Web Design</button>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500 hover:text-white'>App Design</button>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500 hover:text-white'>Graphic Design</button>

        </div>

      </div>
      <div className='container mx-auto mt-9'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <div className="p-4 rounded-md shadow-md bg-slate-50">
          <img className="w-full h-64 object-cover rounded-mds" src="/slice14.png" alt="Error" />
          <h2 className='mt-4 text-xl font-semibold'>Web Design</h2>
          <p className='mt-2'>AppCalling Landing Page Design</p>
        </div>
        <div className=" p-4 rounded-lg shadow-md bg-slate-50">
          <img className="w-full h-64 object-cover rounded-md" src="/slice13.png" alt="Error"  />
          <h2 className='mt-4 text-xl font-semibold'>Web Design</h2>
          <p className='mt-2'>Business Landing Page Design</p>
        </div>   <div className="p-3 rounded-lg shadow-md bg-slate-50">
          <img className="w-full h-64 object-cover rounded-md" src="/slice12.png" alt="Error" />
          <h2 className='mt-4 text-xl font-semibold'>Web Design</h2>
          <p className='mt-2'>ECom Landing Page Design</p>
        </div>
      </div>
      </div>
    </div>
  )
}
