import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Products from "./components/Products.jsx";
import ProductsDetails from "./components/ProductDetails.jsx";
import Cart from "./components/Cart.jsx";
import Wishlist from "./components/Wishlist.jsx";



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
  corsetProducts
} from "./data/womens/data";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element:<ProductsDetails/>
      },
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
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
