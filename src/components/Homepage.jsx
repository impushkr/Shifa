import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Link to={"/indianwear"}>
        <div className="relative ml-2 mr-2 mb-3 h-[28vh] overflow-hidden md:h-[40vh] md:mt-17 lg:h-[45vh] xl:h-[79vh]">
          <img
            src="/homepage-1.jpg"
            alt="welcome-picture"
            className="lg:hidden"
          />
          <img
            src="/homepage-1-2.png"
            alt="welcome-picture"
            className="hidden lg:block lg:mt-[-100px]"
          />
          <button className="hidden lg:block absolute lg:bg-pink-800  text-white font-semibold  lg:bottom-70 lg:h-[3vh] lg:w-[12vw] ml-35 rounded-3xl xl:ml-49 xl:text-xl  xl:bottom-40 xl:h-[5vh] xl:w-[10vw]">
            Shop Now
          </button>
        </div>
      </Link>

      {/* Suggestions */}
      <h1 className="px-4 font-semibold lg:text-xl">Suggested For You</h1>
      <div className=" w-full overflow-x-auto shadow py-3">
        <div className="flex gap-4 px-3 w-max ">
          {/* Best Sellers */}
          <Link to={"/bestsellers"}>
            <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] xl:w-[15vw] xl:h-[40vh]">
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
          </Link>

          {/* Kurtis */}
          <Link to={"/kurtis"}>
            <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] xl:w-[15vw] xl:h-[40vh]">
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
          </Link>

          {/* New Arrivals */}
          <Link to={"/newarrivals"}>
            <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] xl:w-[15vw] xl:h-[40vh]">
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
          </Link>

          {/* Indian Wear */}
          <Link to={"/indianWear"}>
            <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] xl:w-[15vw] xl:h-[40vh]">
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
          </Link>

          {/* Modest Wear */}
          <Link to={"/abayas"}>
            <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] xl:w-[15vw] xl:h-[40vh]">
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
                    Modest Wear
                  </h3>

                  <button className="text-xs px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-black transition lg:py-2 lg:mb-5">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </Link>

          {/* Dresses */}
          <Link to={"/dresses"}>
            <div className="w-[40vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] xl:w-[15vw] xl:h-[40vh]">
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
          </Link>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

      <img
        src="/homepage-2.jpg"
        alt="welcome-picture"
        className=" shadow w-[94vw] m-3 lg:w-[97vw] lg:hidden"
      />

      {/* Popular section */}
      <h1 className="px-1 font-semibold mt-4 mb-1 lg:text-xl">Popular</h1>
      <div className="shadow p-3 flex justify-center gap-1 lg:gap-2 lg:mt-3">
        {/* Cosmetics */}
        <Link to={"/cosmetic"}>
          <div className="h-[40vh] w-[30vw] lg:h-[75vh] lg:w-[35vw] bg-gray-500 overflow-hidden shadow">
            <img
              src="https://img.freepik.com/premium-photo/website-premium-skincare-clinic-men-women-clean-professi-layout-design-concept-idea_655090-885468.jpg"
              alt="cosmetic's"
              className="h-full w-full object-cover lg:hidden"
            />
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/makeup-cosmetics-design-template-59ca35e75d5c5cefc848c270f71a732e_screen.jpg?ts=1702018838"
              alt="cosmetic's"
              className="h-full w-full object-cover hidden lg:block hover:scale-105 transition duration-300"
            />
          </div>
        </Link>

        <div className="flex flex-col gap-1 lg:gap-2">
          {/* Bags */}
          <Link to={"/bags"}>
            <div className="h-[19vh] w-[63vw] lg:h-[35vh] lg:w-[60.5vw] bg-gray-500 overflow-hidden ">
              <img
                src="https://png.pngtree.com/background/20230524/original/pngtree-group-of-different-colored-handbags-picture-image_2707306.jpg"
                alt="bagscosmetic's"
                className="h-full w-full object-cover lg:hidden "
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/036/791/010/large_2x/ai-generated-fashionable-women-shopping-for-elegant-leather-purses-in-a-modern-store-generated-by-ai-photo.jpg"
                alt="bags"
                className="h-full w-full object-cover hidden lg:block hover:scale-105 transition duration-300"
              />
            </div>
          </Link>

          <div className="flex gap-1 lg:gap-2">
            {/* Skincare */}
            <Link to={"/skincare"}>
              <div className="bg-gray-500 h-[20.5vh] w-[31vw] lg:h-[39vh] lg:w-[19.8vw] overflow-hidden">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b55708151330329.630a01e04616a.png"
                  alt="skin care"
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </Link>

            {/* Jwellery */}
            <Link to={"/jewellery"}>
              <div className="bg-gray-500 h-[20.5vh] w-[31vw] lg:h-[39vh] lg:w-[19.8vw] overflow-hidden">
                <img
                  src="https://cdn.eternz.com/thumbnails/products/DSC06186_2f7f6749_thumbnail_1024.jpg"
                  alt="jwellery"
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </Link>

            {/* Sale */}
            <Link to={"/sale"}>
              <div className="hidden lg:block bg-gray-500 h-[39vh] w-[19.8vw] overflow-hidden">
                <img
                  src="https://www.crewclothing.co.uk/images/articles/D_WK42_SITE_UPDATES_FINALS_MN_WW.jpg"
                  alt="sale"
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <h1 className="px-3 font-semibold lg:text-xl mt-8">Special Offers</h1>
      <div className="w-full  xl:overflow-x-auto   shadow mt-2 pb-2 pt-2">
        <div className="flex flex-wrap justify-center gap-2 p-1 xl:w-[167vw]">
          {/* Corset */}
          <Link to={"/corset"}>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://i.pinimg.com/736x/c3/62/bb/c362bb1de08d5bfe58d36aa78cb81674.jpg"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Corsets</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹1599
                </span>
              </div>
            </div>
          </Link>

          {/* Top wear */}
          <Link to={"/topwear"}>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://i.pinimg.com/originals/b0/a2/94/b0a29472d5eb1a864db66e1d81b58c94.jpg"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Top wear</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹390
                </span>
              </div>
            </div>
          </Link>

          {/* Watches */}
          <Link to={"watches"}>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://tse1.explicit.bing.net/th/id/OIP.Zz4vagG4qbAtJMw2bAmlJQHaLF?w=668&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Watches</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹2499
                </span>
              </div>
            </div>
          </Link>

          {/* Co-ordset */}
          <Link to={"/coordset"}>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/6/STJMAYke_25b1fd2da9dd4415b2f1b8752aafed91.jpg"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Co-ord Set</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹999
                </span>
              </div>
            </div>
          </Link>

          {/* Bottom Wear */}
          <Link to={"/bottomwear"}>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.v1SSb8Zrfr7woj5bObO3UgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Bottom wear</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹500
                </span>
              </div>
            </div>
          </Link>

          {/* Footwear */}
          <Link to={"/footwear"}>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/40e8c6bc-255b-488f-aeb4-305b93aa8204.__CR0,0,300,400_PT0_SX300_V1___.jpg"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Foot wear</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹375
                </span>
              </div>
            </div>
          </Link>

          

          {/* Bracelets */}
          <Link to={"/bracelets"}>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://diamindofficial.com/cdn/shop/files/Diamind_0b244ef9-1952-47bc-9d8e-ea015cf2605a_2048x.webp?v=1744185138"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Bracelets</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹999
                </span>
              </div>
            </div>
          </Link>

          {/* Gowns */}
          <Link to={"/gown"}>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://empress-clothing.com/cdn/shop/files/AW5474A.jpg?v=1714136731&width=1800"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Gown's</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹4799
                </span>
              </div>
            </div>
          </Link>

          {/* aaa */}
          <Link>
            <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
              <img
                src="https://cdn.shopify.com/s/files/1/0495/4816/5272/products/3665_I_1024x1024.jpg?v=1645352212"
                alt=""
              />
              <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                <h3 className="font-semibold px-1">Shoes</h3>
                <span className="font-semibold px-1 text-sm mb-3">
                  From -
                </span>{" "}
                <span className="font-semibold text-sm text-green-700">
                  ₹999
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
