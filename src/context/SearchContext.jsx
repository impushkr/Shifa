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

const SearchContext = createContext();

export function SearchProvider({ children }) {
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

  const [input, setInput] = useState("");
  const [liveInput, setLiveInput] = useState([]);
  const [searchedItem, setSearchedItem] = useState([]);

  function handlechange(e) {
    setInput(e.target.value);
    liveSearch(e.target.value.replace(/\s/g, ""));
  }

  function handlesubmit(e) {
    e.preventDefault();
    setLiveInput([])
    const value = input.replace(/\s/g, "").toLowerCase();
    if (!value || value.trim().length === 0) {
      setSearchedItem([]);
      navigate("/");
      return;
    }
    const results = [];
    for(const category of categoriesTitle){
        if(category.name.toLowerCase().replace(/\s/g, "").includes(value)){
          results.push(...category.items)
          setSearchedItem(results)
          return navigate("/products")
        }
     }
    for (const category of categories) {
      const found = category.filter((item) =>
        item.title.toLowerCase().replace(/\s/g, "").includes(value),
      );

      if (found.length > 0) {
        results.push(...found);
      }
    }
    if (results.length === 1) {
      return navigate(`products/${results[0].id}`);
    }
     else if(results.length>1){
      setSearchedItem(results);
      return navigate("/products");
     }
     setSearchedItem([]);
    navigate("/products")
  }

  function liveSearch(value) {
    if (!value) {
      setLiveInput([]);
      return;
    }

    const results = [];

    for (const category of categories) {
      const found = category.filter((item) =>
        item.title.toLowerCase().replace(/\s/g, "").includes(value.toLowerCase()),
      );

      if (found.length > 0) {
        results.push(...found);
      }
    }

    setLiveInput(results);
  }

  return (
    <>
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
    </>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
