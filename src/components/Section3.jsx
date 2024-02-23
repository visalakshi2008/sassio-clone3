import React from 'react'
import shape from '../assests/sec3shape.png'
import mobile from '../assests/mobile.png';
import Image from './Image';


const Section3 = () => {
  return (
    <div className=' relative w-full lg:h-screen lg:bg-sec3background bg-no-repeat overflow-hidden'  style={{backgroundSize:"100%" }}>
    
    {/* <div className='lg:absolute  w-full flex flex-col lg:right-0 items-center lg:top-[-20px] lg:w-[600px] lg:h-[600px] lg:border-black  lg:rounded-full lg:border-2 gap-3' style={{borderColor:"linear-gradient(90deg, rgba(193,45,209,1) 0%, rgba(109,140,248,1) 100%"}}>
        <div><img className=" lg:absolute lg:h-[500px] h-[500px] lg:right-[-20px] lg:top-[50px]" src={mobile} alt='mobile'></img></div>
       <h1 className=' lg:absolute text-4xl px-[70px] font-bold lg:text-white lg:w-[204px] lg:top-[221px] lg:left-[149px] text-black text-center lg:p-0' >Why will you choose our app?</h1>
       <div className=' lg:absolute w-[100%] p-4 grid grid-cols-3 gap-5 text-end'>
       <Image/>
       <Image/>
       <Image/>
    </div>
    </div> */}

    <div className=''>
      <div className=' grid lg:grid-cols-3 grid-col-1'>
        <div className=''>
         1
        </div>
        <div className='relative col-span-2'>
        <div className='absolute  w-full  lg:right-0 items-center lg:top-[-20px] lg:w-[600px] lg:h-[600px] lg:border-black  lg:rounded-full lg:border-2 gap-3' style={{borderColor:"linear-gradient(90deg, rgba(193,45,209,1) 0%, rgba(109,140,248,1) 100%"}}></div>
        <img className=" lg:absolute lg:h-[500px] h-[500px] lg:right-[-120px] lg:top-[50px]" src={mobile} alt='mobile'></img>
        <h1 className=' lg:absolute text-7xl px-[70px] font-bold lg:text-white lg:w-[900px] lg:top-[221px] lg:left-[200px] text-black text-center lg:p-0' >Why will you <br></br> choose our app?</h1>
        <div className=' lg:relative w-[100%] p-4 grid grid-cols-3 gap-5 text-end right-[320px] top-[130px] py-10'>
       <Image />
        </div>
        <div className=' lg:relative w-[100%] p-4 grid grid-cols-3 gap-5 text-end right-[320px] top-[130px] py-10'>
       <Image />
        </div>
        <div className=' lg:relative w-[100%] p-4 grid grid-cols-3 gap-5 text-end right-[280px] top-[130px] py-10'>
       <Image />
        </div>
        </div>
      </div>
    </div>



    <img className="absolute left-[-250px] lg:left-[-90px] bottom-0" src={shape} alt='shape'></img>
</div>
  )
}

export default Section3