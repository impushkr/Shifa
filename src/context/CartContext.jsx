import { createContext,useContext,useState } from "react";

const CartContext=createContext();

export function CartProvider({children}){
    
    const [cartItems,setCartItems]=useState([])

    function addItem(item){
        setCartItems([...cartItems,item])
        console.log(cartItems)
    }

    

    return(<>
    <CartContext.Provider value={{cartItems,addItem}}>{children}</CartContext.Provider></>)
}

export function useCart(){
    return useContext(CartContext)
}