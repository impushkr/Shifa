import { Link } from "react-router-dom";

export default function Homepage() {
  const suggestedItems = [
    { name: "Best Sellers", img: "/bestSeller.png", route: "/bestsellers" },
    { name: "Kurtis", img: "/kurtis.webp", route: "/kurtis" },
    { name: "New Arrivals", img: "/newArrivals.webp", route: "/newarrivals" },
    { name: "Indian Wear", img: "/indianWear.webp", route: "/indianWear" },
    { name: "Modest Wear", img: "/abayas.jpg", route: "/abayas" },
    { name: "Dresses", img: "/Dresses.jpg", route: "/dresses" },
  ];
  const specialOffers = [
    {
      name: "Corsets",
      imageUrl:
        "https://i.pinimg.com/736x/4d/70/9d/4d709d20def44b7755ee86285aebac01.jpg",
      price: "1599",
      route: "/corset",
    },
    {
      name: "Bottom wear",
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.v1SSb8Zrfr7woj5bObO3UgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "500",
      route: "/bottomwear",
    },
    {
      name: "Foot wear",
      imageUrl:
        "https://i.pinimg.com/1200x/93/cc/a2/93cca25b78921f484341316c2d1e5f93.jpg",
      price: "375",
      route: "/footwear",
    },
    {
      name: "Top wear",
      imageUrl:
        "https://i.pinimg.com/1200x/f4/26/25/f426255d1e3993d4f9155badc89f9067.jpg",
      price: "390",
      route: "/topwear",
    },
    {
      name: "Co-ord Set",
      imageUrl:
        "https://i.pinimg.com/1200x/d5/28/5a/d5285a777e484ea6b021d772f66c59d1.jpg",
      price: "999",
      route: "/coordset",
    },
    {
      name: "Office Wear",
      imageUrl:
        "https://i.pinimg.com/originals/3b/b3/54/3bb3545602a6425fe4e4da72cb66d97f.png",
      price: "2299",
      route: "/officewear",
    },
    {
      name: "Bracelets",
      imageUrl:
        "https://i.pinimg.com/1200x/9d/82/f8/9d82f81235276db91bbdc53f2fcd130b.jpg",
      price: "999",
      route: "/bracelets",
    },
    {
      name: "Gown's",
      imageUrl:
        "https://i.pinimg.com/736x/ff/76/b1/ff76b11a57fde7982463b5c12989894a.jpg",
      price: "4799",
      route: "/gown",
    },
    {
      name: "Watches",
      imageUrl:
        "https://i.pinimg.com/1200x/a9/40/dd/a940dd5000eda2fd61a4d150a83b5915.jpg",
      price: "2499",
      route: "/watches",
    },
  ];

  return (
    <>
      {/* ====================== Suggested Section ====================== */}
      <h1 className="px-4 font-semibold lg:text-xl mt-5 md:mt-17">
        Suggested For You
      </h1>
      <div className=" w-full overflow-x-auto shadow py-3">
        <div className="flex gap-4 px-3 w-max ">
          {suggestedItems.map((item) => (
            <Link to={`${item.route}`}>
              <div className="w-[41vw] min-w-[15vw] rounded-sm overflow-hidden bg-white hover:shadow-md transition md:w-[30vw] xl:w-[15vw] xl:h-[40vh]">
                <div className="relative h-[30.8vh] lg:h-[40vh]">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover hover:scale-105 transition duration-300"
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
                      {item.name}
                    </h3>

                    <button className="text-xs px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-black transition lg:py-2 lg:mb-5">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ====================== Pupular Section ====================== */}
      <h1 className="px-4 font-semibold mt-4 mb-1 lg:text-xl">Popular</h1>
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
              src="https://i.pinimg.com/1200x/38/43/77/384377e9a95ab1c2d1b0f50bb1113cb7.jpg"
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
                  src="https://i.pinimg.com/1200x/5e/53/a3/5e53a39ef3d9b031684219a473df55ab.jpg"
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

      {/* ====================== Special Offer Section ====================== */}
      <h1 className="px-4 font-semibold lg:text-xl mt-8">Special Offers</h1>
      <div className="w-full  xl:overflow-x-auto   shadow mt-2 pb-2 pt-2">
        <div className="flex flex-wrap justify-center gap-2 p-1 xl:w-[167vw]">
          {specialOffers.map((item) => (
            <Link to={`${item.route}`}>
              <div className="h-[27vh] w-[31vw] rounded-2xl relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
                <img src={item.imageUrl} alt={item.name} />
                <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                  <h3 className="font-semibold px-1">{item.name}</h3>
                  <span className="font-semibold px-1 text-sm mb-3">
                    From -
                  </span>{" "}
                  <span className="font-semibold text-sm text-green-700">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
