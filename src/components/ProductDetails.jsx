import { useCart } from "../context/CartContext";
import {
  indianWear,
  jewellary,
  kurtis,
  womenBags,
  womenBottomwear,
  womenFootwear,
  womenTopWear,
  newArrivals,
  abayas,
  dresses,
  cosmetics,
  skincare,
} from "../data/womens/data";

import { useParams } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();

  const products =
    indianWear.find((item) => item.id == id) ||
    jewellary.find((item) => item.id == id) ||
    womenBags.find((item) => item.id == id) ||
    womenBottomwear.find((item) => item.id == id) ||
    womenFootwear.find((item) => item.id == id) ||
    womenTopWear.find((item) => item.id == id)||
    kurtis.find((item) => item.id == id)||
    newArrivals.find((item) => item.id == id)||
    abayas.find((item) => item.id == id)||
    dresses.find((item) => item.id == id)||
    cosmetics.find((item) => item.id == id)||
    skincare.find((item) => item.id == id);

  if (!products) return null;

  const{cartItems,addItem}=useCart();

  return (
    <div className="w-full px-4 md:px-10 md:mt-20 lg:mt-15 mb-5 lg:py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* IMAGE SECTION */}
        <div className="relative bg-white shadow rounded-2xl overflow-hidden">
          <img
            src={products.imageUrl}
            alt="Product"
            className="w-full h-full object-cover"
          />

          {/* Wishlist */}
          {/* <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:scale-110">
            <img src="" alt="wishlist" className="w-6 h-6" />
          </button> */}
        </div>

        {/* DETAILS SECTION */}
        <div className="bg-white shadow rounded-2xl p-6 flex flex-col gap-5 overflow-hidden  justify-between">
          <div className="flex flex-col gap-5">
            <div>
              {products.tag?.length > 0 && (
                <h1 className="text-blue-700 text-xs mb-2 font-semibold">
                  {products.tag[0].title}
                </h1>
              )}
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                {products.title}
              </h2>

              <p className="text-gray-600 mb-5">{products.subTitle}</p>

              {/* PRICE */}
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold text-gray-900">
                  ₹ {products.discountedPrice}
                </span>

                {products.discount > 0 && (
                  <>
                    <span className="line-through text-gray-400">
                      ₹ {products.price}
                    </span>
                    <span className="text-green-600 font-medium">
                      {products.discount}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>
            <hr />

            {/* Select Size */}
            {products.sizeVariation?.length > 0 && (
              <div>
                <h1 className="font-medium text-xl mb-2">Select Size</h1>

                <div className="flex gap-3 overflow-x-auto pb-2">
                  {products.sizeVariation.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-400 rounded-2xl flex justify-center items-center
          h-[4vh] min-w-[11vw]
          md:h-[3vh] md:min-w-[6vw]
          lg:h-[2.5vh] lg:min-w-[5vw]
          xl:h-[3.8vh] xl:min-w-[4vw]
          "
                    >
                      {item.title.length > 5
                        ? item.title.slice(5, 7)
                        : item.title}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Set Delivery location */}
            <div>
              <h2 className="font-semibold text-xl">
                Select Delivery Location
              </h2>
              <p className="text-gray-600 mb-5">
                Enter the pincode of your area to check product availability and
                delivery options
              </p>

              <input
                type="text"
                placeholder="   Enter Your Pincode Here"
                className="border-b bg-gray-200 md:w-[27vw] lg:w-[22vw] xl:w-[15vw] h-[5vh] px-4"
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Add To Wishlist
            </button>

            <button 
            onClick={()=>addItem(products)}
            className="flex-1 bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition">
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
