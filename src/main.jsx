import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// React Router setup
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages and components
import Homepage from "./components/Homepage.jsx";
import Products from "./components/Products.jsx";
import ProductsDetails from "./components/ProductDetails.jsx";
import Cart from "./components/Cart.jsx";
import Wishlist from "./components/Wishlist.jsx";
import OfferCarousel from "./components/OfferCrousal.jsx";

// Product data for different categories
import {
  indianWear,
  jewellary,
  womenBags,
  womenBottomwear,
  womenFootwear,
  womenTopWear,
  kurtis,
  newArrivals,
  abayas,
  dresses,
  bestSellers,
  cosmetics,
  skincare,
  sale,
  corsetProducts,
  coordSetProducts,
  watches,
  bracelets,
  gown,
  officeWear,
  summerCollection,
  winterCollection,
} from "./data/womens/data";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout
    children: [
      {
        path: "/",
        element: (
          <>
            <OfferCarousel />
            <Homepage />
          </>
        ), // Home page
      },
      {
        path: "/products",
        element: <Products />,
      },

      // Category routes
      {
        path: "/bestsellers",
        element: <Products data={bestSellers} />,
      },
      {
        path: "/kurtis",
        element: <Products data={kurtis} />,
      },
      {
        path: "/newarrivals",
        element: <Products data={newArrivals} />,
      },
      {
        path: "/indianWear",
        element: <Products data={indianWear} />,
      },
      {
        path: "/abayas",
        element: <Products data={abayas} />,
      },
      {
        path: "/dresses",
        element: <Products data={dresses} />,
      },
      {
        path: "/cosmetic",
        element: <Products data={cosmetics} />,
      },
      {
        path: "/bags",
        element: <Products data={womenBags} />,
      },
      {
        path: "/skincare",
        element: <Products data={skincare} />,
      },
      {
        path: "/jewellery",
        element: <Products data={jewellary} />,
      },
      {
        path: "/sale",
        element: <Products data={sale} />,
      },
      {
        path: "/bottomwear",
        element: <Products data={womenBottomwear} />,
      },
      {
        path: "/topWear",
        element: <Products data={womenTopWear} />,
      },
      {
        path: "/footwear",
        element: <Products data={womenFootwear} />,
      },
      {
        path: "/corset",
        element: <Products data={corsetProducts} />,
      },
      {
        path: "/coordset",
        element: <Products data={coordSetProducts} />,
      },
      {
        path: "/watches",
        element: <Products data={watches} />,
      },
      {
        path: "/bracelets",
        element: <Products data={bracelets} />,
      },
      {
        path: "/gown",
        element: <Products data={gown} />,
      },
      {
        path: "/officewear",
        element: <Products data={officeWear} />,
      },
      {
        path: "/summerCollection",
        element: <Products data={summerCollection} />,
      },
      {
        path: "/winterCollection",
        element: <Products data={winterCollection} />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />, // Dynamic product page
      },
    ],
  },
]);

// Render app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
