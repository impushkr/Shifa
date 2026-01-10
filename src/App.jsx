import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import Footer from "./components/footer"
import { Outlet } from "react-router-dom"

export default function App(){

  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}