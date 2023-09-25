import React from 'react'
import Navbar from '../Navbar/page'

export default function Projects() {
  return (
    <div>
      <Navbar />

      <div className='text-center mt-16 '><h1 className='text-5xl font-bold'>My Projects</h1>
        <p className='text-lg font-normal mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officiis quidem ab itaque, cum facere atque, molestias odio molestiae similique consequatur voluptate tempora!</p>
        <div className='flex justify-center space-x-4 mt-6'>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500'>All</button>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500'>UI/UX</button>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500'>Web Design</button>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500'>App Design</button>
          <button className='border border-black rounded-md px-4 py-0 text-xl hover:bg-orange-500'>Graphic Design</button>

        </div>

      </div>
      <div className='flex mt-6 '>
        <div className="max-w-lg rounded overflow-hidden shadow-lg w-1/3 bg-slate-50">
          <img className="" src="/slice14.png" alt="Error" width="150px" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Graphic Design</div>

          </div>
        </div>
        <div className="max-w-lg rounded overflow-hidden shadow-lg w-1/3  bg-slate-50">
          <img className="" src="/slice13.png" alt="Error" width="150px" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Graphic Design</div>

          </div>
        </div>   <div className="max-w-lg rounded overflow-hidden shadow-lg w-1/3 bg-slate-50">
          <img className="" src="/slice12.png" alt="Error" width="150px" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Graphic Design</div>

          </div>
        </div>
      </div>
    </div>
  )
}
