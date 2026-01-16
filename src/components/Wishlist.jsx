import { Heart, Trash2 } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { addItem } = useCart();
  const { wishlistItems, removefromwishlist } = useWishlist();
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:mt-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Heart className="text-pink-500" /> My Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden xl:w-[18.5vw]"
              >
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-[27vh] object-cover md:h-[30vh lg:h-[26] xl:h-[37vh]"
                  />
                </Link>

                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 truncate">
                    {item.title}
                  </h3>

                  <span className="text-pink-600 font-semibold mt-1">
                    ₹{item.discountedPrice}
                  </span>
                  <span className="text-gray-500 text-xs ml-2 mt-1 line-through">
                    ₹{item.price}
                  </span>

                  <div className="flex justify-between items-center mt-3">
                    <button
                      onClick={() => {
                        addItem(item);
                      }}
                      className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200"
                    >
                      Move to Cart
                    </button>

                    <button
                      onClick={() => {
                        removefromwishlist(item);
                      }}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
