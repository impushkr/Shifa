import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

    const subtotal = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

   const discount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const subtotaldiscount= discount-subtotal;


  cartItems.map((item) => {
    if (item.quantity == 0) {
      remove(item);
    }
  });

  function addItem(item) {
    setCartItems((previous) => {
      const exist = previous.find((preitem) => preitem.id == item.id);

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

  function remove(item) {
    setCartItems((preItem) => preItem.filter((items) => items.id != item.id));
  }




  return (
    <>
      <CartContext.Provider
        value={{ cartItems, subtotal, subtotaldiscount, addItem, reduceItem, remove }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
export function useCart() {
  return useContext(CartContext);
}
