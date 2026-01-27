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

    const value = input.replace(/\s/g, "");

    if (!value || value.trim().length === 0) {
      setSearchedItem([]);
      navigate("/");
      return;
    }

    const results = [];

    for (const category of categories) {
      const found = category.filter((item) =>
        item.title.toLowerCase().replace(/\s/g, "").includes(value.toLowerCase().trim()),
      );

      if (found.length > 0) {
        results.push(...found);
      }
    }
    setLiveInput([]);
    if (results.length === 1) {
      return navigate(`products/${results[0].id}`);
    }

    setSearchedItem(results);
    navigate("/products");
    
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
