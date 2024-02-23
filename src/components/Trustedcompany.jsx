import React from 'react';
import footerimage from '../assests/footermobile.png';

import footersection from '../assests/footersection.png';

const Trustedcompany = () => {
  return (
    <div className='relative w-[100vw] h-[100vh]  flex flex-col justify-center items-center'>
    <img className=' absolute w-[100%] h-[300px]' src={footersection} alt='footer'></img>

    <div className='absolute grid md:grid-cols-3 grid-cols-1'>
       <div className='w-[100%] h-[100%]  flex flex-col justify-center items-center col-span-2 gap-4'>
       <p className=' relative text-5xl font-bold text-[white]  text-start'>Subscribe to our newsletter</p>
       <div class='relative w-full max-w-[500px] h-[50px] bg-white rounded-full flex items-center p-2'>
           <input type="email" id="email" name="email" placeholder="Enter your email" class=" px-4 flex-grow appearance-none bg-transparent text-gray-700 focus:outline-none"></input>
           <button class="ml-2 px-7 py-4 bg-[red] rounded-full text-white">Subscribe Now</button>
             </div>
             <p className='relative text-[white] text-[15px] text-start'>* Your mail address will be fully secure . We don’t share!</p>
       </div>
       <div className='w-[100%] h-[100%]  flex flex-col justify-center items-center'>
       <div className='hidden md:block'>
            <img className="relative top-[-0px]" src={footerimage} alt='mob'></img>
            </div>
       </div>
    </div>
   
        
    </div>
  )
}

export default Trustedcompany