import React from 'react'
import pg1 from '../assests/1.png'
import pg2 from '../assests/2.png'
import pg3 from '../assests/3.png'
import gradienticon from '../assests/gradienticon.png'
import CountUp from 'react-countup';
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import { Fade } from "react-awesome-reveal";

const Numbers = () => {
    const [counteron,counterset]= useState(false)
  return (
    <>
       
        <div className='relative  w-[100%]  bg-numbersbg  md:p-[80px] bg-cover p-[40px] py-[70px]' >
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-[100px]'>
        <Fade direction='left' triggerOnce='true'> <div className=' relative w-[100%] h-[100%] flex flex-col justify-center items-center'>
                  <img src={pg2} alt=''></img>
                  <img className=" absolute top-[20px] right-[-45px]" src={pg1} alt=''></img>
                  <img className="hidden absolute md:block bottom-[10px] left-[-21px]" src={pg3} alt=''></img>
                  {/* <img src={} alt=''></img>
                  <img src={} alt=''></img> */}
                </div></Fade>
                <Fade direction='right' triggerOnce='true'>   <div className='flex flex-col justify-start gap-8 md:p-10 md:px-12'>
                  <div className='flex gap-3 '>
                  <img src={gradienticon} alt='gradienticon'></img>
                  <p className='text-3xl' >fun facts</p>
                  </div>
                  <h1 className='text-6xl '>
                  <span className='text-6xl font-bold'>We have some awesome</span> funfacts for clients.
                  </h1>
                  <p className='text-[15px] text-[gray]'>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                  <ScrollTrigger onEnter={()=>counterset(true)} onExit={()=>counterset(false)}>
                  <div className='grid grid-cols-2 '>
                    <div className='text-[#7C0DBE] text-6xl font-bold flex flex-col items-center px-8 py-12 border-r-2 border-b-2 shadow-xl'>
                       <div> {counteron && <CountUp start={0} end={20 } duration={3} delay={0}></CountUp>}+</div>
                        <p className='text-3xl font-semibold text-center text-black'>Awesome Integratios</p>
                    </div>
                    <div className='text-[#ff00d6] text-6xl font-bold flex flex-col items-center px-8 py-12  border-b-2 '>
                       <div> {counteron && <CountUp start={0} end={2000 } duration={3} delay={0}></CountUp>}+</div>
                        <p className='text-3xl font-semibold text-center text-black'>Awesome Integratios</p>
                    </div>
                    <div className='text-[#4ce7f3] text-6xl font-bold flex flex-col items-center  px-8 py-12 border-r-2'>
                       <div> {counteron && <CountUp start={0} end={5000 } duration={3} delay={0}></CountUp>}+</div>
                        <p className='text-3xl font-semibold text-center text-black'>Awesome Integratios</p>
                    </div>
                    <div className='text-[#007bff] text-6xl font-bold flex flex-col items-center  px-8 py-12 shadow-xl'>
                       <div> {counteron && <CountUp start={0} end={2500 } duration={3} delay={0} ></CountUp>}+</div>
                        <p className='text-3xl font-semibold text-center text-black'>Awesome Integratios</p>
                    </div>
                  </div></ScrollTrigger>
                </div></Fade>

        </div>
    </div>
    </>
  )
}

export default Numbers