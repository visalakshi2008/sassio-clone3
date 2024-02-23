import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='bg-[black] '>
         <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center  '>
                <p className='text-[pink] font-bold p-2'>DOING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text:6xl text:4xl md:py-6' >grow with data</h1>
                <div>
                    <p className='md:text-5x sm:4xl text-xl fond-bold'>fast, flexible ,financing for</p>
                    <ReactTyped strings={["abc","bdc","cbd",]} 
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                     />
                </div>

                
            </div>
         </div>
    </div>
  )
}

export default Hero