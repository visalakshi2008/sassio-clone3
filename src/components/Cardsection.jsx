import gradienticon from '../assests/gradienticon.png';
import Card from './Card';
import React from 'react';
import { Fade } from "react-awesome-reveal";

const Cardsection = () => {


  return (
    <>
      <div className='relative  w-full bg-secondbg-bg flex flex-col items-center p-10 bg-cover gap-[50px]'>
        <div className='flex flex-col text-center items-center gap-5'>
          <p className='flex text-3xl gap-3 items-center font-semibold '>
            <img src={gradienticon} alt='icon'></img>
            Fetaured services
          </p>
          <h1 className='font-bold text-6xl'>Why you will choose</h1>
          <h1 className='font-semibold text-6xl'>Our Software?</h1>
          <p className='text-[gray] md:w-[500px]'>
            As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.
          </p>
        </div>
        <div className='cards w-[75vw] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-5 gap-5'>
          <Fade delay={100} direction='up' triggerOnce='true'>
            <Card />
          </Fade>
          <Fade delay={200} direction='up'>
            <Card />
          </Fade>
          <Fade delay={400} direction='up'>
            <Card />
          </Fade>
          <Fade delay={800} direction='up'>
            <Card />
          </Fade>
          
        </div>
      </div>
    </>
  )
}

export default Cardsection;
