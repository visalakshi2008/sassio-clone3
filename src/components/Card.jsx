import React from 'react'
import { TbBrandAdonisJs } from "react-icons/tb";
import { motion } from 'framer-motion';
const Card = () => {

    
   const button = {
    initial:0,
    animate: {
      scale:1.1,
      x: [0, 10, 0], 
      y: [0, 10, 0],
      transition: {
        duration: 0.8, 
        opacity:0.5,      
        repeat: Infinity,  
      }
    }
  };
  const button2 = {
    initial:0,
    animate: {
      scale:1.1,
      x: [0, 8, 0], 
      y: [0, 8, 0],
      transition: {
        duration: 1, 
        opacity:0.1,      
        repeat: Infinity,  
      }
    }
  };
  const button3 = {
    initial:0,
    animate: {
      scale:1.1,
      x: [0, 12, 0], 
      y: [0, 12, 0],
      transition: {
        duration: 1, 
        opacity:0.1,      
        repeat: Infinity,  
      }
    }
  };
  return (
    <>
        <div className=''>
             
             <motion.div initial="initial" animate="initial" whileHover="animate" className='flex flex-col items-center gap-3 py-12 px-4 bg-[#e1e3fa] rounded-2xl  hover:bg-white  hover:shadow-xl transition duration-500 ease-in-out'>
             <motion.div className='relative w-[100px] h-[100px] bg-white  rounded-3xl '></motion.div>
             <motion.div className='absolute w-[100px] h-[100px] bg-[#ff00d7]  rounded-3xl ' variants={button} ></motion.div>
             <motion.div className='absolute w-[100px] h-[100px] bg-[#50c7f5]  rounded-3xl ' variants={button3} ></motion.div>
             <motion.div className='absolute w-[100px] h-[100px] bg-[#72aaff]  rounded-3xl ' variants={button2} ></motion.div>
             <motion.div className='absolute w-[100px] h-[100px] bg-white  rounded-3xl shadow-lg flex justify-center items-center py-12 '>
               <TbBrandAdonisJs className='w-12 h-12' />
             </motion.div>
              <h2 className='text-2xl font-bold '>Branding</h2>
              <p className='text-1xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
             </motion.div>
          </div>
    </>
  )
}

export default Card