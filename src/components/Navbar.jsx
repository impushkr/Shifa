import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useSearch } from "../context/SearchContext";
import { FiUser, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { ArrowUpLeft, Search, X } from "lucide-react";

import Login from "./Login";

export default function Navbar() {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const {
    input,
    liveInput,
    setInput,
    setLiveInput,
    handlechange,
    handlesubmit,
  } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50 ">
        <div className="max-w-7xl mx-auto  px-2 lg:px-5">
          <div className="flex gap-22 justify-between h-16 items-center">
            <div className="flex gap-2">
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <FiX className="text-2xl" />
                  ) : (
                    <FiMenu className="text-2xl" />
                  )}
                </button>
              </div>
              {/* Logo */}
              <div onClick={() => navigate("/")} className="flex-shrink-0">
                <img
                  src="/Shifa-Logo.png"
                  alt="Shifa Logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="md:flex justify-between w-[68vw] lg:w-[75vw] xl:w-[70vw]">
              <div className="flex items-center justify-between w-[60vw] md:w-[65vw] lg:w-[74vw]">
                <Link to={"/"}>
                  <h1 className="hidden lg:block font-semibold text-lg hover:text-pink-400">
                    Home
                  </h1>
                </Link>
                <h1
                  onClick={() => {
                    alert(
                      "We’re working on this section. It will be available soon!",
                    );
                  }}
                  className="hidden lg:block font-semibold text-lg hover:text-pink-400"
                >
                  About
                </h1>
                <h1
                  onClick={() => {
                    alert(
                      "We’re working on this section. It will be available soon!",
                    );
                  }}
                  className="hidden lg:block font-semibold text-lg hover:text-pink-400"
                >
                  Contact
                </h1>

                <div className="relative w-[40vw] md:w-[25vw] xl:w-[30vw]">
                  <form onSubmit={handlesubmit} className="relative w-full">
                    {/* Search Icon */}
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />

                    <input
                      value={input}
                      onChange={handlechange}
                      type="text"
                      placeholder="Search for products..."
                      className="w-full pl-9 pr-9 py-2 border border-gray-300 rounded-full 
               outline-none text-sm h-11
               focus:border-gray-800
               transition-all duration-200"
                    />

                    {/* Clear (Cross) Icon */}
                    {input && (
                      <X
                        onClick={() => {
                          setInput("");
                          setLiveInput([]);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 
                 w-4 h-4 text-gray-500 cursor-pointer 
                 hover:text-black transition"
                      />
                    )}
                  </form>
                  {liveInput.length > 0 && (
                    <div className="absolute top-12 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-50">
                      {liveInput.map((item) => (
                        <div
                          key={item.id}
                          className="hidden lg:flex justify-between items-center px-4 py-2 cursor-pointer"
                          onClick={() => {
                            setInput(item.title);
                            setLiveInput([]);
                          }}
                        >
                          <Link to={`/products/${item.id}`}>
                            <div
                              onClick={() => {
                                setLiveInput([]);
                              }}
                              className="flex items-center gap-3  hover:bg-gray-100 lg:w-[18vw] xl:w-[20vw]"
                            >
                              {/* Product Image */}
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-10 h-10 object-cover rounded-md"
                              />

                              {/* Product Title */}
                              <span className="text-sm">{item.title}</span>
                            </div>
                          </Link>
                          <ArrowUpLeft
                            className="text-gray-700 "
                            onClick={() => {
                              setInput(item.title);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-2 md:justify-between items-center w-[15vw] md:w-[35vw] lg:w-[27vw] xl:w-[21vw]">
                  <div
                    onClick={() => setShowLogin(true)}
                    className="hidden md:flex items-center gap-1.5"
                  >
                    <FiUser className=" text-2xl md:text-xl cursor-pointer hover:text-pink-600" />
                    <h1 className=" hidden md:block text-lg font-medium  hover:text-pink-600">
                      Account
                    </h1>
                  </div>
                  <Link to={"/wishlist"}>
                    <div className="flex items-center gap-1.5 ">
                      <div className="relative">
                        <FiHeart className="text-2xl md:text-xl cursor-pointer hover:text-pink-600" />
                        {wishlistItems.length > 0 && (
                          <div className="absolute bottom-4 right-[-0.6vw] bg-pink-500 font-semibold text-xs text-white text-center rounded-4xl md:bottom-3 md:right-[-0.4vw] xl:right-[-0.1vw] p-1"></div>
                        )}
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
                      {cartItems.length > 0 && (
                        <p className="absolute bottom-4 right-[-2vw] bg-pink-500 w-[4vw] font-semibold text-xs text-white text-center rounded-4xl md:text-xs md:w-[2.2vw] md:right-[-1.9vw] lg:w-[1.8vw] lg:right-[-1.4vw] xl:w-[1.2vw] xl:right-[-1vw]">
                          {cartItems.length > 9 ? "9+" : cartItems.length}
                        </p>
                      )}
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
              <li
                onClick={() => {
                  setShowLogin(true);
                }}
                className="hover:text-pink-600 cursor-pointer"
              >
                Login
              </li>
              <li
                onClick={() => {
                  navigate("/") && setIsOpen(!isOpen);
                }}
                className="hover:text-pink-600 cursor-pointer"
              >
                Home
              </li>
              <li onClick={() => {
                      alert(
                        "We’re working on this section. It will be available soon!",
                      );
                    }} className="hover:text-pink-600 cursor-pointer">
                Your Orders
              </li>
              <li onClick={() => {
                      alert(
                        "We’re working on this section. It will be available soon!",
                      );
                    }} className="hover:text-pink-600 cursor-pointer">Contact</li>
              <li onClick={() => {
                      alert(
                        "We’re working on this section. It will be available soon!",
                      );
                    }} className="hover:text-pink-600 cursor-pointer">Help</li>
            </ul>
          </div>
        )}
      </nav>

      {liveInput.length > 0 && (
        <div className="lg:hidden absolute top-12 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-[48vh] overflow-y-auto z-50 mt-4">
          {liveInput.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-4 py-2  hover:bg-gray-100"
            >
              <Link to={`/products/${item.id}`}>
                <div
                  onClick={() => {
                    setLiveInput([]);
                  }}
                  className="flex items-center gap-3 w-[83vw] md:w-[92vw]"
                >
                  {/* Product Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-10 h-10 object-cover rounded-md"
                  />

                  {/* Product Title */}
                  <span className="text-sm">{item.title}</span>
                </div>
              </Link>
              <ArrowUpLeft
                className="text-gray-700 "
                onClick={() => {
                  setInput(item.title);
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="mt-16 flex h-13 items-center justify-center space-x-6 text-gray-500 font-semibold md:hidden ">
        <li
          onClick={() => {
            navigate("/newarrivals");
          }}
          className="hover:text-pink-600"
        >
          New Arrivals
        </li>
        <li
          onClick={() => {
            navigate("/dresses");
          }}
          className="hover:text-pink-600"
        >
          Dresses
        </li>
        <li
          onClick={() => {
            navigate("/kurtis");
          }}
          className="hover:text-pink-600"
        >
          Kurtis
        </li>
        <li
          onClick={() => {
            navigate("/topwear");
          }}
          className="hover:text-pink-600"
        >
          Tops
        </li>
        <li
          onClick={() => {
            navigate("/sale");
          }}
          className="hover:text-pink-600"
        >
          Sale
        </li>
      </ul>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}
