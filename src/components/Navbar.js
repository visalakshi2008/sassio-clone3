import React, { useState,useEffect } from 'react';
import logo from '../assests/logo1.png';
import icon1 from '../assests/Vector (2).png';
import icon2 from '../assests/Vector.png';
import icon3 from '../assests/bi_linkedin.png';
import icon4 from '../assests/Vector (1).png';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaX } from "react-icons/fa6";



function Navbar() {
    const [isMenuOpen,setisMenuOpen] = useState(false)
    const [isSticky,setisSticky] = useState(false)

    const toggleMenu=()=>{
        setisMenuOpen(!isMenuOpen)
    }
    useEffect(()=>{

       const handleScroll=()=>{
        if(window.scrollY>100){
            setisSticky(true)  
        }
        else{
            setisSticky(false)  
        }
       };
       window.addEventListener('scroll',handleScroll)
       return ()=>{
        window.addEventListener('scroll',handleScroll)
       }
    })
    
    

  const navitems = [
    { link: 'Home', path: 'home' },
    { link: 'Features', path: 'features' },
    { link: 'Showcase', path: 'showcase' },
    { link: 'Team', path: 'team' },
    { link: 'Faq', path: 'faq' },
    { link: 'Screenshots', path: 'screenshots' },
  ];

  return (
    <header className=' w-full  bg-transparent fixed top-0 left-0 right-0 z-[1000]' >
      <nav className={`py-4 md:px-[200px] sm:px-0 px-4 ${isSticky?" sticky top-0 left-0  bg-color duration:300":""} `}>
        <div className='flex justify-between items-center text-base gap-8 p-[36px]'>
            <a href='/'><img  src={logo} alt='logo' /></a>
            <ul className='md:flex space-x-11 hidden'>
            {navitems.map(({ link, path }) => 
              <Link to={path} key={path} spy={true} smooth={true} className='block  text-white text-2xl'>
                {link}
              </Link>
            )}
          </ul>

          <div className='flex items-center gap-2.5'>
          <div className='space-x-12 md:flex items-center hidden'>
           <button className='bg-[#29F5EB] text-black px-[45px] py-6 transition-all duration-300 rounded-full'>SignIn</button>
          </div>
            <button className='md:hidden' onClick={toggleMenu}>
                {
                    isMenuOpen? (<FaX className='w-8 h-8 text-white' />):(<IoMdMenu className='w-10 h-10 text-white' />)
                }
            </button>
          </div>
          <ul className='md:flex  space-x-3 hidden'>
            <li> <img src={icon1} alt='icon1'></img></li>
            <li> <img src={icon2} alt='icon2'></img></li>
            <li> <img src={icon3} alt='icon3'></img></li>
            <li> <img src={icon4} alt='icon4'></img></li>
           
          </ul>

          <div className={`space-y-4 px-4 mt-16 py-17 bg-color ${isMenuOpen?"block fixed top-[70px] left-0 right-0 ":"hidden"}`}>
          {navitems.map(({ link, path }) => 
              <Link to={path} key={path} spy={true} smooth={true} className='block text-base text-white'>
                {link}
              </Link>
            )}
          </div>


        </div>
        
      </nav>
    </header>
  );
}

export default Navbar;
