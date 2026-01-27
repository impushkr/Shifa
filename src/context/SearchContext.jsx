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
  const [finalInput, setFinalInput] = useState([]);

  function handlechange(e) {
    setInput(e.target.value);
    liveSearch(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();

    const value = input;

    if (!value || value.trim().length === 0) {
      setFinalInput([]);
      navigate("/");
      return;
    }

    const results = [];

    for (const category of categories) {
      const found = category.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase().trim()),
      );

      if (found.length > 0) {
        results.push(...found);
      }
    }

    if (results.length === 1) {
      return navigate(`products/${results[0].id}`);
    }

    setFinalInput(results);
    navigate("/products");
    setLiveInput([]);
  }

  function liveSearch(value) {
    if (!value) {
      setLiveInput([]);
      return;
    }

    const results = [];

    for (const category of categories) {
      const found = category.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase().trim()),
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
          finalInput,
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
