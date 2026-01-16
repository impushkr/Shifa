import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import { Outlet } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"

export default function App(){

  return(
    <>
    <WishlistProvider>
    <CartProvider>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </CartProvider>
    </WishlistProvider>
    </>
  )
}