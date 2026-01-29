import { Minus, Plus, Trash2, ShoppingBag, Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";

export default function Cart() {
  const { cartItems, addItem, subtotal, subtotaldiscount, reduceItem, remove } =
    useCart();

  const { addtowishlist } = useWishlist();

  return (
    <div className="min-h-screen px-4 py-4 md:py-6 md:mt-15">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <ShoppingBag className="text-pink-500" /> My Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-1.5">
              {cartItems.map((item) => (
                <div className="bg-white p-2">
                  <div key={item.id} className="flex gap-4">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-24 h-32 object-cover rounded-xl"
                      />
                    </Link>

                    <div className="flex-1">
                      <Link to={`/products/${item.id}`}>
                        <h3 className="text-sm font-medium text-gray-800 mt-1">
                          {item.title}
                        </h3>
                        <h6 className="text-xs text-gray-400">
                          {item.subTitle}
                        </h6>

                        {item.discount > 0 && (
                          <span className="text-green-600 text-xs mt-1 mr-2">
                            {item.discount}% OFF
                          </span>
                        )}
                        <span className="text-gray-500 text-xs mr-2 mt-1 line-through">
                          ₹{item.actualprice}
                        </span>
                        <span className="text-pink-600 font-semibold mt-1">
                          ₹{item.afterdiscount}
                        </span>
                      </Link>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => {
                            reduceItem(item);
                          }}
                          className="p-1 rounded-full border"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => {
                            addItem(item);
                          }}
                          className="p-1 rounded-full border"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-t mt-3 justify-center">
                    <button
                      onClick={() => {
                        remove(item);
                      }}
                      className=" text-gray-600 p-2 w-[40vw] border-r hover:scale-95 flex gap-2 justify-center items-center"
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        addtowishlist(item);
                      }}
                      className=" text-gray-600 p-2 w-[40vw]  hover:scale-95 flex gap-2 justify-center items-center"
                    >
                      Add to <Heart size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-sm p-5 h-fit lg:h-[35vh] xl:h-[70vh] lg:flex lg:flex-col lg:justify-between ">
              <div>
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                <div className="flex justify-between text-sm mb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span>Discount</span>
                  <span>₹{subtotaldiscount}</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-3 mt-3">
                  <span>Total</span>
                  <span>₹{subtotal}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert("Checkout feature will be available soon. Stay tuned!");
                }}
                className="w-full mt-5 bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 hover:scale-95 transition sticky bottom-0 "
              >
                Proceed to Checkout
              </button>
            </div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}
