import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { SearchProvider } from "./context/SearchContext";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SearchProvider>
      <WishlistProvider>
        <CartProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </CartProvider>
      </WishlistProvider>
      </SearchProvider>
    </>
  );
}
