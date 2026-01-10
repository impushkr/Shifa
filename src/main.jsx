import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Products from "./components/Products.jsx";

import {
  indianWear,
  jewellary,
  womenBags,
  womenBottomwear,
  womenFootwear,
  womenTopWear,
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
        path: "products",
        element: <Products />,
      },
      {
        path: "/jewellery",
        element: <Products data={jewellary} />,
      },
      {
        path: "/indianWear",
        element: <Products data={indianWear} />,
      },
      {
        path: "/bags",
        element: <Products data={womenBags} />,
      },
      {
        path: "/bottomwear",
        element: <Products data={womenBottomwear} />,
      },
      {
        path: "/footwear",
        element: <Products data={womenFootwear} />,
      },
      {
        path: "/topWear",
        element: <Products data={womenTopWear} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
