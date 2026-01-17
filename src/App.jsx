import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import { Outlet } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"
import ScrollToTop from './components/ScrollToTop';


export default function App(){

  return(
    <>
    <ScrollToTop/>
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