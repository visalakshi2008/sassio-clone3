import React from 'react'
import { TbBrandBilibili } from "react-icons/tb";

const Image = () => {
  return (
    <>
         <div className='col-span-2'>
        <h1 className='text-5xl text-black font-bold py-2 '>Bug free</h1>
        <p className='text-1xl text-black'>As a app web crawler expert, I help <br></br> organizations  adjust to the expanding <br></br> significance of internet promoting.</p>
       </div>
       <div className='w-[100px] h-[100px] bg-white shadow-2xl rounded-full flex items-center justify-center'>
       <TbBrandBilibili className='w-8 h-8'/>
       </div>
    </>
  )
}

export default Image