import React, { useState } from "react";
import { FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
         <nav className="bg-white shadow-md fixed w-full top-0 z-50 ">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo-navbar.png" alt="Shifa Logo" className="h-12 w-auto" />
          </div>

          

          {/* Right Icons */}
          <div className="md:flex justify-between w-[34vw] ">
          <input 
              type="text" 
              placeholder="   Search Here . . . . ." 
              className="w-[40vw] px-3 py-1 border border-gray-300 rounded-full outline-none text-sm h-10 md:w-[22vw]"
            />
          <div className="hidden md:flex items-center w-[10vw] justify-between">
            <FiUser className="text-2xl  cursor-pointer hover:text-pink-600" />
            <FiHeart className="text-2xl  cursor-pointer hover:text-pink-600" />
            <FiShoppingCart className="text-2xl  cursor-pointer hover:text-pink-600" />
          </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX className="text-2xl text-black-500" /> 
                        : <FiMenu className="text-2xl text-black-500" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4 text-pink-600 font-semibold">
            <li><a href="#" className="hover:text-pink-400">New Arrivals</a></li>
            <li><a href="#" className="hover:text-pink-400">Dresses</a></li>
            <li><a href="#" className="hover:text-pink-400">Kurtis</a></li>
            <li><a href="#" className="hover:text-pink-400">Tops</a></li>
            <li><a href="#" className="hover:text-pink-400">Sale</a></li>
          </ul>
        </div>
      )}
         </nav>

         {/* Desktop Menu */}
<ul className="flex h-14 mt-16 items-center justify-center space-x-5 text-gray-500 font-semibold md:justify-evenly ">
            <li><a href="#" className="hover:text-pink-600">New Arrivals</a></li>
            <li><a href="#" className="hover:text-pink-600">Dresses</a></li>
            <li><a href="#" className="hover:text-pink-600">Kurtis</a></li>
            <li><a href="#" className="hover:text-pink-600">Tops</a></li>
            <li><a href="#" className="hover:text-pink-600">Sale</a></li>
          </ul>
         
          

         </>
    )
}