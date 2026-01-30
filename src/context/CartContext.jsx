import { createContext, useContext, useState } from "react";

// Creating cart context
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Total price after discount
  const subtotal = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  // Total original price
  const discount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Total discount amount
  const subtotaldiscount = discount - subtotal;

  // Remove item if quantity becomes 0
  cartItems.map((item) => {
    if (item.quantity == 0) {
      remove(item);
    }
  });

  // Add item to cart
  function addItem(item) {
    setCartItems((previous) => {
      const exist = previous.find((preitem) => preitem.id == item.id);

      // If already exists → increase quantity
      if (exist) {
        return previous.map((preItem) =>
          preItem.id == item.id
            ? {
                ...preItem,
                quantity: preItem.quantity + 1,
                afterdiscount: item.discountedPrice * (preItem.quantity + 1),
                actualprice: item.price * (preItem.quantity + 1),
              }
            : preItem
        );
      }

      // If new item → add to cart
      return [
        ...previous,
        {
          ...item,
          quantity: 1,
          afterdiscount: item.discountedPrice,
          actualprice: item.price,
        },
      ];
    });
  }

  // Decrease item quantity
  function reduceItem(item) {
    setCartItems((previous) => {
      return previous.map((preItem) =>
        preItem.id == item.id
          ? {
              ...preItem,
              quantity: preItem.quantity - 1,
              afterdiscount: preItem.afterdiscount - item.discountedPrice,
              actualprice: preItem.actualprice - item.price,
            }
          : preItem
      );
    });
  }

  // Remove item completely from cart
  function remove(item) {
    setCartItems((preItem) =>
      preItem.filter((items) => items.id != item.id)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        subtotal,
        subtotaldiscount,
        addItem,
        reduceItem,
        remove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  return useContext(CartContext);
}
