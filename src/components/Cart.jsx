import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, addItem, reduceItem } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <ShoppingBag className="text-pink-500" /> My Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm p-4 flex gap-4"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-24 h-32 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-pink-600 font-semibold mt-1">
                      ₹{item.actualprice}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => {
                          reduceItem(item);
                        }}
                        className="p-1 rounded-full border"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm">{item.qty}</span>
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

                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm p-5 h-fit">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-3 mt-3">
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>

              <button className="w-full mt-5 bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
