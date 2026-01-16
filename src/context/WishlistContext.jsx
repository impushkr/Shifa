import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  function addtowishlist(item) {
    const exist = wishlistItems.find(
      (previousitem) => previousitem.id == item.id
    );
    if (exist) {
      return;
    }
    setWishlistItems([...wishlistItems, item]);
  }

  function removefromwishlist(item) {
    setWishlistItems((previousitem) =>
      previousitem.filter((pitem) => {
        return pitem.id != item.id;
      })
    );
  }

  return (
    <>
      <WishlistContext.Provider
        value={{ wishlistItems, addtowishlist, removefromwishlist }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
