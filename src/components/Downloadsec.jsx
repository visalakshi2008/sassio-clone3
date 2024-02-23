import React from 'react'
import mobilepic from '../assests/downloadpic.png';
import gradienticon from '../assests/gradienticon.png'
import googlepay from '../assests/googlepay.png'
import appstore from '../assests/applestore.png'
import { FaLightbulb } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Downloadsec = () => {
  return (
    <>
        <div className=' relative w-full lg:h-screen lg:bg-downloadbg bg-no-repeat overflow-hidden flex justify-center items-center md:p-[50px] p-[30px] py-[100px]'  style={{backgroundSize:"100%" }}>
        <div className=' w-[80vw] grid md:grid-cols-2 grid-cols-1 gap-12'>
        <Fade direction='left' triggerOnce='true'>       <div className='' >
            <img src={mobilepic} alt='mobilepic'></img>
        </div></Fade>
        <div className=' flex flex-col justify-center gap-8 ' >
        <div className='flex gap-3 '>
                  <img src={gradienticon} alt='gradienticon'></img>
                 <p className='text-3xl'> App Download</p>
                  </div>
                  <h1 className='text-6xl '>
                  <span className='text-6xl font-bold'>This app is available for</span> your smart phone.
                  </h1>
                  <p className='text-[15px] text-[gray]'>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                 
                  <div className='flex gap-2'>
                    <img src={googlepay} alt='pay'></img>
                    <img src={appstore} alt='apple'></img>
                  </div>

                  <div className='flex items-center gap-2'>
                   <div className='w-[50px] h-[50px] bg-red-300 rounded-full flex items-center justify-center'>
                   <FaLightbulb className=''/>
                   </div>
                   <div className='flex  flex-col gap-1'>
                   <p className='text-[grey]'>Are you interested for this app?</p>
                   <p className='text-[blue]'>Learn More</p>
                   </div>
                  </div>

                  

        </div>
        </div>

        </div>
    </>
  )
}

export default Downloadsec