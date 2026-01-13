import { Heart, Trash2 } from "lucide-react";

const wishlistItems = [
  {
    id: 1,
    name: "Floral Kurti",
    price: "₹1,499",
    image: "https://via.placeholder.com/300x400",
  },
  {
    id: 2,
    name: "Embroidered Abaya",
    price: "₹2,999",
    image: "https://via.placeholder.com/300x400",
  },
  {
    id: 3,
    name: "Designer Dress",
    price: "₹3,499",
    image: "https://via.placeholder.com/300x400",
  },
];

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
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
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <p className="text-pink-600 font-semibold text-sm mt-1">
                    {item.price}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <button className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200">
                      Move to Cart
                    </button>

                    <button className="text-gray-400 hover:text-red-500">
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
