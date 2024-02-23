import React from 'react'
import { TbStarFilled } from "react-icons/tb";

const Scrolldata = () => {
  return (
    <>
         <div className='flex flex-col  bg-white p-4 shadow-xl mr-4  '>
           <div className='flex  items-center gap-5'>
              <div className='w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center shadow-lg' >
              <TbStarFilled className='w-6 h-6'/>
              </div>
              <h1 className='text-2xl font-bold'>Make a <br></br> profile</h1>
           </div>
           <p className='text-[gray]'>As a app web crawler expert, I help organizations adjusting.</p>
           </div>
    </>
  )
}

export default Scrolldata