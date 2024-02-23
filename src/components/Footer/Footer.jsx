import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import logo from "../../assests/f-logo.png"

const Footer = () => {
  return (
    <footer className="bg-white text-white p-[50px]">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-2xl text-2xl md:mb-0 mb-6 text-black lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">
            <img src={logo} alt="log"></img>
          </span> <br></br> Lorem Ipsum is simply dummy text of the printing and type.
          
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-[#29F5EB] duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span className="text-2xl">© 2020 Appy. All rights reserved.</span>
        <span className="text-2xl">Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  )
}

export default Footer