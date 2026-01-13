import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import { Outlet } from "react-router-dom"
import { CartProvider } from "./context/CartContext"

export default function App(){

  return(
    <>
    <CartProvider>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </CartProvider>
    </>
  )
}