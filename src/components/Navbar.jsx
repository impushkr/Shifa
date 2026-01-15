import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import {
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiSearch,
} from "react-icons/fi";
import { RiQrCodeLine } from "react-icons/ri";

export default function Navbar() {

  const{cartItems}=useCart();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50 ">
        <div className="max-w-7xl mx-auto  px-2 lg:px-5">
          <div className="flex gap-20 justify-between h-16 items-center">
            <div className="flex">
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center mr-3">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <FiX className="text-2xl" />
                  ) : (
                    <FiMenu className="text-2xl" />
                  )}
                </button>
              </div>
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/logo-navbar.png"
                  alt="Shifa Logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="md:flex justify-between w-[68vw] lg:w-[75vw] xl:w-[70vw]">
              <div className="flex items-center justify-between w-[50vw] md:w-[65vw] lg:w-[74vw]">
                <h1 className="hidden lg:block font-semibold text-lg hover:text-pink-400">
                  Home
                </h1>
                <h1 className="hidden lg:block font-semibold text-lg hover:text-pink-400">
                  About
                </h1>
                <h1 className="hidden lg:block font-semibold text-lg hover:text-pink-400">
                  Contact
                </h1>

                <input
                  type="text"
                  placeholder="Search Here . . . . ."
                  className="w-[30vw] px-3 py-1 border border-gray-400 rounded-full outline-none text-sm h-10 md:w-[25vw] hover:border-black"
                />

                <div className="flex justify-between items-center w-[15vw] md:w-[35vw] lg:w-[27vw] xl:w-[21vw]">
                  <div className="hidden md:flex items-center gap-1.5">
                    <FiUser className=" text-2xl md:text-xl cursor-pointer hover:text-pink-600" />
                    <h1 className=" hidden md:block text-lg font-medium  hover:text-pink-600">
                      Account
                    </h1>
                  </div>
                  <Link to={"/wishlist"}>
                  <div className="flex items-center gap-1.5 ">
                    <div className="relative">
                      <FiHeart className="text-2xl md:text-xl cursor-pointer hover:text-pink-600" />
                      <div className="absolute bottom-4 right-[-0.6vw] bg-pink-400 font-semibold text-xs text-white text-center rounded-4xl md:bottom-3 md:right-[-0.4vw] xl:right-[-0.1vw] p-1"></div>
                    </div>
                    <h1 className="hidden md:block text-lg font-medium  hover:text-pink-600">
                      Wishlist
                    </h1>
                  </div>
                  </Link>
                  <Link to={"/cart"}>
                    <div className="flex items-center gap-1.5 relative">
                      <FiShoppingBag className="text-2xl md:text-xl cursor-pointer hover:text-pink-600" />
                      <h1 className="hidden md:block text-lg font-medium  hover:text-pink-600">
                        Cart
                      </h1>
                      {cartItems.length >0  && <p className="absolute bottom-4 right-[-2vw] bg-pink-400 w-[4vw] font-semibold text-xs text-white text-center rounded-4xl md:text-xs md:w-[2.2vw] md:right-[-1.9vw] lg:w-[1.8vw] lg:right-[-1.4vw] xl:w-[1.2vw] xl:right-[-1vw]">
                        {cartItems.length >9 ? "9+" : cartItems.length}
                      </p> }
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-3 p-4 font-semibold text-gray-700">
              <li className="hover:text-pink-600 cursor-pointer">Home</li>
              <li className="hover:text-pink-600 cursor-pointer">
                Your Orders
              </li>
              <li className="hover:text-pink-600 cursor-pointer">Contact</li>
              <li className="hover:text-pink-600 cursor-pointer">Help</li>
            </ul>
          </div>
        )}
      </nav>

      {/* <div className="mt-18 flex items-center justify-center gap-2 md:hidden">
        <form
        className="flex rounded-lg border w-[80vw] items-center gap-4 ml-1 h-10 mt md:hidden"
      >
        <img className="size-6 ml-3" src="/search-icon.png" alt="Search" />
        <input
          className="h-10 w-md focus:outline-none"
          type="text"
          placeholder="Search for products here...."
        />
      </form>
      <RiQrCodeLine className="text-4xl"/>
      </div> */}

      {/* Desktop Menu */}
      <ul className="mt-16 flex h-13 items-center justify-center space-x-6 text-gray-500 font-semibold md:hidden ">
        <li>
          <a href="#" className="hover:text-pink-600">
            New Arrivals
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-600">
            Dresses
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-600">
            Kurtis
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-600">
            Tops
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-pink-600">
            Sale
          </a>
        </li>
      </ul>
    </>
  );
}
