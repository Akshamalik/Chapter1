import React from 'react'
import Navbar from '../Navbar/page'

export default function Services() {
  return (
    <div>
      <Navbar />
      <div>
        <div className='text-center mt-16'><h1 className='text-6xl font-bold'>Services</h1>
          <p className='text-lg font-normal mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum obcaecati ut voluptates rerum vero! Minus assumenda modi consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit culpa fuga? Culpa provident, aliquam dolorem in tenetur vero sed odit reiciendis repellat accusamus necessitatibus labore voluptatum hic? Similique, dicta?</p>
        </div>
      </div>
      <div className='flex mt-10'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
          <img className="" src="/slice8.png" alt="Error" width="150px" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">UI/UX</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>



        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-slate-50">
          <img className="" src="/slice9.png" alt="Error" width="150px" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Web Design</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>



        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-slate-50">
          <img className="" src="/slice10.png" alt="Error" width="150px" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">App Design</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>



        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-slate-50">
          <img className="" src="/slice11.png" alt="Error" width="150px" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Graphic Design</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>



        </div>
      </div>
    </div>


  )
}
