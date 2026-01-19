import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router";

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
  corsetProducts,
  coordSetProducts,
} from "../data/womens/data";

import { useParams } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();

  const categories = [
    indianWear,
    jewellary,
    womenBags,
    womenBottomwear,
    womenFootwear,
    womenTopWear,
    kurtis,
    newArrivals,
    abayas,
    dresses,
    cosmetics,
    skincare,
    corsetProducts,
    coordSetProducts
  ];

  let relatedProducts = [];
  for (const category of categories) {
    const found = category.find((item) => item.id == id);
    if (found) {
      relatedProducts = category.filter((item) => item.id != id);
      break;
    }
  }

  const products =
    indianWear.find((item) => item.id == id) ||
    jewellary.find((item) => item.id == id) ||
    womenBags.find((item) => item.id == id) ||
    womenBottomwear.find((item) => item.id == id) ||
    womenFootwear.find((item) => item.id == id) ||
    womenTopWear.find((item) => item.id == id) ||
    kurtis.find((item) => item.id == id) ||
    newArrivals.find((item) => item.id == id) ||
    abayas.find((item) => item.id == id) ||
    dresses.find((item) => item.id == id) ||
    cosmetics.find((item) => item.id == id) ||
    skincare.find((item) => item.id == id) ||
    corsetProducts.find((item) => item.id == id)||
    coordSetProducts.find((item) => item.id == id);

  if (!products) return null;

  const { cartItems, addItem } = useCart();
  const { wishlistItems, addtowishlist } = useWishlist();

  const [productImage, setProductImage] = useState(products.imageUrl);

  return (
    <>
      <div className="w-full px-4 md:px-8 md:mt-20 lg:mt-15 mb-5 lg:py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 xl:gap-4.5">
          <div className="md:flex md:gap-1.5">
            {/* Product Image gallery starts from medium device */}
            <div className="hidden md:block overflow-y-auto mt-3 h-[45vh] w-30 xl:h-[80vh] xl:w-31  ">
              <div className="flex flex-col xl:gap-1">
                {products.plp_pdp_bridge?.images
                  ? products.plp_pdp_bridge.images.map((product) => (
                      <div
                        onClick={() => {
                          setProductImage(product.url);
                        }}
                        className="h-[12vh] w-[6vw] overflow-hidden rounded-lg "
                      >
                        <img
                          src={product.url}
                          alt={products.title}
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="relative bg-white shadow rounded-2xl overflow-hidden">
              <img
                src={productImage}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Image gallery for mobiles */}
            <div className="overflow-x-auto mt-1 md:hidden ">
              <div className="flex gap-1 w-max p-2 ">
                {products.plp_pdp_bridge?.images
                  ? products.plp_pdp_bridge.images.map((product) => (
                      <div
                        onMouseEnter={() => {
                          setProductImage(product.url);
                        }}
                        onClick={() => {
                          setProductImage(product.url);
                        }}
                        className="h-[10vh] md:h-[12vh] w-[20vw] md:w-[6vw] overflow-hidden rounded-lg "
                      >
                        <img
                          src={product.url}
                          alt={products.title}
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
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
                      <button
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
                      </button>
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
                  Enter the pincode of your area to check product availability
                  and delivery options
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
              {wishlistItems.some(
                (previousItem) => previousItem.id == products.id
              ) ? (
                <button
                  className={
                    "flex-1 border border-gray-300 py-3 rounded-xl font-semibold transition bg-gray-200 cursor-not-allowed"
                  }
                >
                  Added To Wishlist
                </button>
              ) : (
                <button
                  onClick={() => {
                    addtowishlist(products);
                  }}
                  className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition hover:scale-95"
                >
                  Add To Wishlist
                </button>
              )}

              {cartItems.some(
                (previousItem) => previousItem.id == products.id
              ) ? (
                <button className="flex-1 bg-pink-800 text-white py-3 rounded-xl font-semibold transition ">
                  Added
                </button>
              ) : (
                <button
                  onClick={() => addItem(products)}
                  className="flex-1 bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition hover:scale-95"
                >
                  Add To Bag
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <h1 className="px-3 font-semibold lg:text-xl mt-8">You may also like</h1>
      <div className="w-full overflow-x-auto shadow mt-2 py-2">
        <div className="flex justify-center gap-2 p-1 w-max">
          {relatedProducts.map((items) => (
            <>
              <Link to={`/products/${items.id}`}>
                <div className="h-[27vh] w-[31vw] rounded-lg relative overflow-hidden sm:h-[37vh] sm:w-[30vw] md:w-[30vw] lg:h-[30vh] lg:w-[22vw] xl:h-[42vh] xl:w-[18vw]">
                  <img src={items.imageUrl} alt="" />
                  <div className="absolute h-[7vh] bottom-0 bg-white w-full">
                    <h3 className="font-semibold px-1">Bottom wear</h3>
                    <span className="font-semibold px-1 text-sm mb-3">
                      From -
                    </span>{" "}
                    <span className="font-semibold text-sm text-green-700">
                      ₹{items.discountedPrice}
                    </span>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
