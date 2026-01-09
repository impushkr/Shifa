export default function Homepage() {
  return (
    <>
      <div className="h-[28vh] w-full overflow-hidden md:h-[40vh] lg:h-[80vh]">
        <img
          src="/homepage-1.jpg"
          alt="welcome-picture"
          className="relative lg:hidden"
        />
        <img
          src="/homepage-1-2.png"
          alt="welcome-picture"
          className="hidden relative lg:block lg:mt-[-100px]"
        />
        <button className="hidden lg:block lg:bg-pink-800  text-white font-semibold absolute top-150 h-[5vh] rounded-3xl ml-40 text-xl w-[10vw]">
          Shop Now
        </button>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className=" w-full overflow-x-auto">
        <div className="flex gap-4 px-4 w-max mt-4 mb-4">

          <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] lg:w-[15vw] lg:h-[40vh]">
            {/* Image */}
            <div className="h-[28vh] lg:h-[40vh]">
              <img
                src="/bestSeller.png"
                alt="Best Seller"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="relative">
              {/* Image */}
              <img
                src="/images/new-arrivals.jpg"
                alt="New Arrivals"
                className="h-full w-full object-cover"
              />

              {/* Text Overlay */}
              <div
                className="
    absolute bottom-0 left-0 w-full
    text-center py-4 lg:py-4
    bg-white/60 backdrop-blur-md
  "
              >
                <h3 className="text-gray-800 font-medium text-sm mb-2">
                  Best Sellers
                </h3>

                <button className="text-xs px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-black transition lg:py-2 lg:mb-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] lg:w-[15vw] lg:h-[40vh]">
            {/* Image */}
            <div className="h-[28vh] lg:h-[40vh]">
              <img
                src="/kurtis.webp"
                alt="Kurtis"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="relative">
              {/* Image */}
              <img
                src="/images/new-arrivals.jpg"
                alt="New Arrivals"
                className="h-full w-full object-cover"
              />

              {/* Text Overlay */}
              <div
                className="
    absolute bottom-0 left-0 w-full
    text-center py-4 lg:py-4
    bg-white/60 backdrop-blur-md
  "
              >
                <h3 className="text-gray-800 font-medium text-sm mb-2">
                  Kurtis
                </h3>

                <button className="text-xs px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-black transition lg:py-2 lg:mb-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] lg:w-[15vw] lg:h-[40vh]">
            {/* Image */}
            <div className="h-[28vh] lg:h-[40vh]">
              <img
                src="/newArrivals.webp"
                alt="New Arrivals"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="relative">
              {/* Image */}
              <img
                src="/images/new-arrivals.jpg"
                alt="New Arrivals"
                className="h-full w-full object-cover"
              />

              {/* Text Overlay */}
              <div
                className="
    absolute bottom-0 left-0 w-full
    text-center py-4 lg:py-4
    bg-white/60 backdrop-blur-md
  "
              >
                <h3 className="text-gray-800 font-medium text-sm mb-2">
                  New Arrivals
                </h3>

                <button className="text-xs px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-black transition lg:py-2 lg:mb-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] lg:w-[15vw] lg:h-[40vh]">
            {/* Image */}
            <div className="h-[28vh] lg:h-[40vh]">
              <img
                src="/indianWear.webp"
                alt="Indian Wear"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="relative">
              {/* Image */}
              <img
                src="/images/new-arrivals.jpg"
                alt="New Arrivals"
                className="h-full w-full object-cover"
              />

              {/* Text Overlay */}
              <div
                className="
    absolute bottom-0 left-0 w-full
    text-center py-4 lg:py-4
    bg-white/60 backdrop-blur-md
  "
              >
                <h3 className="text-gray-800 font-medium text-sm mb-2">
                  Indian Wear
                </h3>

                <button className="text-xs px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-black transition lg:py-2 lg:mb-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] lg:w-[15vw] lg:h-[40vh]">
            {/* Image */}
            <div className="h-[28vh] lg:h-[40vh]">
              <img
                src="/abayas.jpg"
                alt="Abaya's"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="relative">
              {/* Image */}
              <img
                src="/images/new-arrivals.jpg"
                alt="New Arrivals"
                className="h-full w-full object-cover"
              />

              {/* Text Overlay */}
              <div
                className="
    absolute bottom-0 left-0 w-full
    text-center py-4 lg:py-4
    bg-white/60 backdrop-blur-md
  "
              >
                <h3 className="text-gray-800 font-medium text-sm mb-2">
                  Abaya's
                </h3>

                <button className="text-xs px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-black transition lg:py-2 lg:mb-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] lg:w-[15vw] lg:h-[40vh]">
            {/* Image */}
            <div className="h-[28vh] lg:h-[40vh]">
              <img
                src="/Dresses.jpg"
                alt="Dresses"
                className="h-full w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="relative">
              {/* Image */}
              <img
                src="/images/new-arrivals.jpg"
                alt="New Arrivals"
                className="h-full w-full object-cover"
              />

              {/* Text Overlay */}
              <div
                className="
    absolute bottom-0 left-0 w-full
    text-center py-4 lg:py-4
    bg-white/60 backdrop-blur-md
  "
              >
                <h3 className="text-gray-800 font-medium text-sm mb-2">
                  Dresses
                </h3>

                <button className="text-xs px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-black transition lg:py-2 lg:mb-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          

        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}


      <img
        src="/homepage-2.jpg"
        alt="welcome-picture"
        className=" mb-15 shadow"
      />
    </>
  );
}
