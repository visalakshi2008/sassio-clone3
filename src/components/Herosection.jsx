import background from '../assests/bg2.png';
import mobile from '../assests/mobile.png';
import { FaPowerOff } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import Wavemotion from './Wavemotion';
import Navbar from './Navbar';
import React from 'react';
import { Fade } from "react-awesome-reveal";

function Herosection() {
  return (
    <>
      <div className='relative w-[100%] ' style={{ background: "linear-gradient(90deg, rgba(193,45,209,1) 0%, rgba(109,140,248,1) 100%)" }}>
        <img className='absolute top-0 left-0 h-screen w-full object-cover z-0' src={background} alt='background'></img>
        <Navbar className="z-1000000"/>
        <div className='relative hero-section md:w-[83vw] mx-auto p-9 grid md:grid-cols-3 grid-cols-1 z-10 top-[130px] '>
          <div className='z-20 flex flex-col  items-center md:items-start col-span-2'>
            <p className=' text-white lg:text-[70px] text-7xl font-extrabold px-5 leading-tight pb-5 md:text-start  text-center md:w-[80%]'>The new website
              for <tb></tb><ReactTyped className='text-black' strings={["app landing","showcase","screenshot",]} 
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                      />
            </p>
            <p className='text-white text-[20px] md:text-start  text-center'>SaaSio is the best software platform for running an internet business.</p>
            <div className='z-30 flex gap-3 py-7 items-center'>
              <button class="rounded-tl-full rounded-tr-none rounded-bl-full rounded-br-full transition duration-300 ease-in-out transform hover:rounded-bl-none hover:rounded-tr-full bg-[#ff00d6] hover:bg-[#007bff] px-10 py-5">
                <div className='flex items-center gap-2 text-white font-bold' ><FaPowerOff className='text-[black]'/>Start Now</div>
              </button>
              <p className='z-30 font-extrabold text-[#4ce7f3] text-2xl'><span className='text-white'>or</span> try it for free</p>
            </div>

            <div className='flex  md:flex-row flex-col  items-center justify-center gap-2 '>
              <div className='flex gap-1 py-2'>
                <TbStarFilled className='text-[#ffc107]'/>
                <TbStarFilled className='text-[#ffc107]'/>
                <TbStarFilled className='text-[#ffc107]'/>
                <TbStarFilled className='text-[#ffc107]'/>
                <TbStarFilled className='text-[#ffc107]'/>
              </div>
              <p className='text-white font-bold text-2xl'>(based on <span className='text-bold font-extrabold text-black'>1,256 task </span> reviews)</p>
            </div>
          </div>
          <Fade direction='right' triggerOnce='true'>
          <div className=' mobile z-10 flex items-center'>
            <img src={mobile} alt='mobile'></img>
          </div></Fade>
        </div>
        <Wavemotion className="z-1"/>
      </div>
    </>
  );
}

export default Herosection;
