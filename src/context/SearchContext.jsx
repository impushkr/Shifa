import { createContext, useContext, useState } from "react";
import {
  indianWear,
  jewellary,
  kurtis,
  womenBags,
  womenBottomwear,
  womenFootwear,
  womenTopWear,
  newArrivals,
  abayas,
  dresses,
  cosmetics,
  skincare,
  corsetProducts,
  coordSetProducts,
  watches,
  bracelets,
  gown,
  officeWear,
  summerCollection,
  winterCollection,
} from "../data/womens/data";
import { useNavigate } from "react-router-dom";

// Creating search context
const SearchContext = createContext();

export function SearchProvider({ children }) {

  // All product categories
  const categories = [
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
    cosmetics,
    skincare,
    corsetProducts,
    coordSetProducts,
    watches,
    bracelets,
    gown,
    officeWear,
    summerCollection,
    winterCollection,
  ];

  // Keywords mapped to categories for quick matching
  const categoriesTitle = [
    { name: "indianwear,ethnicwear,traditional,saree,lehenga,salwar,salwarsuit,punjabisuit", items: indianWear },
    { name: "jewellery,jewelry,necklace,earring,ring,bangle,accessories", items: jewellary },
    { name: "bag,bags,purse,handbag,shoulderbag,totebag,clutch,girlsbag,womenbags", items: womenBags },
    { name: "womenbottomwear,jeans,leggings,palazzo,pants,trousers,skirts", items: womenBottomwear },
    { name: "womenfootwear,shoes,sneakers,heels,sandals,flats,boots", items: womenFootwear },
    { name: "womentopwear,top,tops,tshirt,blouse,shirt,croptop", items: womenTopWear },
    { name: "womenkurti,kurtis,ethnickurti,punjabisuits", items: kurtis },
    { name: "new,newarrivals,latest,trending,justin", items: newArrivals },
    { name: "abaya,abayas,burkha,burkhas,hijab", items: abayas },
    { name: "dress,dresses,gown,partywear,maxidress,longdress", items: dresses },
    { name: "cosmetics,makeup,beauty,lipstick,foundation,mascara", items: cosmetics },
    { name: "skincare,facewash,serum,moisturizer,cream,cleanser", items: skincare },
    { name: "corset,corsets,waisttrainer", items: corsetProducts },
    { name: "coordset,co-ord,coordsets,matchingset,twopiece", items: coordSetProducts },
    { name: "watch,watches,wristwatch", items: watches },
    { name: "bracelet,bracelets,bangle", items: bracelets },
    { name: "gown,eveninggown,longgown", items: gown },
    { name: "officewear,formalwear,formal,workwear", items: officeWear },
    { name: "summer,summerwear,lightwear", items: summerCollection },
    { name: "winter,winterwear,sweater,jacket,coat", items: winterCollection },
  ];

  const navigate = useNavigate();

  // Search states
  const [input, setInput] = useState("");
  const [liveInput, setLiveInput] = useState([]);
  const [searchedItem, setSearchedItem] = useState([]);

  // Handle input change
  function handlechange(e) {
    setInput(e.target.value);
    liveSearch(e.target.value.replace(/\s/g, ""));
  }

  // Handle form submit search
  function handlesubmit(e) {
    e.preventDefault();
    setLiveInput([]);

    const value = input.replace(/\s/g, "").toLowerCase();

    if (!value || value.trim().length === 0) {
      setSearchedItem([]);
      navigate("/");
      return;
    }

    const results = [];

    // First check keyword-based categories
    for (const category of categoriesTitle) {
      if (category.name.toLowerCase().replace(/\s/g, "").includes(value)) {
        results.push(...category.items);
        setSearchedItem(results);
        return navigate("/products");
      }
    }

    // Then check individual product titles
    for (const category of categories) {
      const found = category.filter((item) =>
        item.title.toLowerCase().replace(/\s/g, "").includes(value)
      );

      if (found.length > 0) {
        results.push(...found);
      }
    }

    // If single product found → go to details page
    if (results.length === 1) {
      return navigate(`products/${results[0].id}`);
    }

    // If multiple products found → show products page
    else if (results.length > 1) {
      setSearchedItem(results);
      return navigate("/products");
    }

    // If nothing found
    setSearchedItem([]);
    navigate("/products");
  }

  // Live search while typing
  function liveSearch(value) {
    if (!value) {
      setLiveInput([]);
      return;
    }

    const results = [];

    for (const category of categories) {
      const found = category.filter((item) =>
        item.title.toLowerCase().replace(/\s/g, "").includes(value.toLowerCase())
      );

      if (found.length > 0) {
        results.push(...found);
      }
    }

    setLiveInput(results);
  }

  return (
    <SearchContext.Provider
      value={{
        input,
        liveInput,
        searchedItem,
        setInput,
        setLiveInput,
        handlechange,
        handlesubmit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook for using search context
export function useSearch() {
  return useContext(SearchContext);
}
