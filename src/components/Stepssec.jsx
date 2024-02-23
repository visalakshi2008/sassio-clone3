import React from 'react';
import gradienticon from '../assests/gradienticon.png';
import Scrolldata from './Scrolldata';
import mobilegif from '../assests/mobile2.gif'
import { Fade } from "react-awesome-reveal";

const Stepssec = () => {
  return (
    <div className='w-full  bg-datesecbg bg-no-repeat flex justify-center items-center p-[80px] py-[100px] bg-cover' >
      <div className=' grid md:grid-cols-2 gap-12 '>
        
      <Fade direction='left' triggerOnce='true'><div className='p-2 w-fit h-fit rounded-lg mx-auto'>
          <div className='flex flex-col justify-start gap-8  p-[80px]'>
          <div className='flex gap-3'>
            <img src={gradienticon} alt='gradienticon' />
            <p className='text-3xl'>How this app is working?</p>
          </div>
          <h1 className='text-6xl relative bottom-3'>
            <span className='text-6xl font-bold'>This app is working by</span><br></br> some steps!
          </h1>
            <div className='resize-none w-[400px] h-[280px] scrollbar scrollbar-thumb-[#7C0DBE] scrollbar-track-gray-100 overflow-y-auto flex flex-col gap-5 '>
              <Scrolldata />
              <Scrolldata />
              <Scrolldata />
              <Scrolldata />
            </div>
          </div>
        </div></Fade>
        <Fade direction='right' triggerOnce='true'><div className=' flex items-center justify-center'>
            <img className='h-[500px]' src={mobilegif} alt='t'></img>
        </div></Fade>
      </div>
    </div>
  );
};

export default Stepssec;
