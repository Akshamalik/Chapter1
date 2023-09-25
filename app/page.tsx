import Image from "next/image"
import Navbar from "./Navbar/page"



export default function Home() {
  return (
    <div>
      <Navbar/>
       <div className="flex flex-wrap mt-24 px-28 items-center mx-auto">
            <div className="w-2/3">
                <p className=" font-light p-1 text-2xl">Hi I am</p>
                <h5 className="text-orange-400 font-bold p-1 text-3xl">Muhammad Umar</h5>
                <h1 className="font-extrabold text-7xl p-1">
                    UI & UX </h1><h1 className="font-extrabold text-7xl px-16 p-1">Designer
                </h1>
                <p className="p-1 mt-3 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aut iure reiciendis consequuntur fugiat quisquam eum repudiandae nobis ducimus, cumque perspiciatis. Ex, asperiores?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae beatae distinctio dolorem adipisci.</p>
                <button className="text-white bg-orange-400 py-1 rounded px-16 font-bold  mt-6 text-2xl">Hire Me</button>
            </div>
            <div className="w-1/3 flex justify-end ">
                <img src="/slice2.png" alt="error" width="400px" />
            </div>
        </div>
       
    </div>   
  )
}
