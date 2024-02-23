import React from 'react'
import gradienticon from '../assests/gradienticon.png'
import Mobilecards from './Mobilecards'

const Mobilecarosal = () => {
  return (
    <>
        <div className='w-full flex  flex-col items-center justify-center py-[100px] '>
    <div className='lg:w-[40vw] flex  flex-col items-center justify-center px-10 gap-8'>
        <div className='flex gap-3 '>
                  <img src={gradienticon} alt='gradienticon'></img>
                  <p className='text-3xl'>App screenshots</p>
                  </div>
                  <h1 className='text-6xl text-center '>
                  <span className='text-6xl font-bold text-center'>App screenshots is important to</span> know properly the app!
                  </h1>
                  <p className='text-[15px] text-[gray] text-center'>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                  </div>    
                  <div className='w-[75vw] py-10 flex justify-center items-center'>
                  </div>
                  <div className='w-[75vw]  flex justify-center items-center'>
                  <Mobilecards/>
                  </div>
    </div>
    </>
  )
}

export default Mobilecarosal