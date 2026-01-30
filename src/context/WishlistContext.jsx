import { createContext, useContext, useState } from "react";

// Creating wishlist context
const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  // State to store wishlist items
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add item to wishlist
  function addtowishlist(item) {
    // Check if item already exists
    const exist = wishlistItems.find(
      (previousitem) => previousitem.id == item.id,
    );

    if (exist) {
      return; // Prevent duplicate items
    }

    setWishlistItems([...wishlistItems, item]);
  }

  // Function to remove item from wishlist
  function removefromwishlist(item) {
    setWishlistItems((previousitem) =>
      previousitem.filter((pitem) => {
        return pitem.id != item.id;
      }),
    );
  }

  return (
    <>
      {/* Providing wishlist state and functions globally */}
      <WishlistContext.Provider
        value={{ wishlistItems, addtowishlist, removefromwishlist }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
}

// Custom hook to use wishlist context easily
export function useWishlist() {
  return useContext(WishlistContext);
}
