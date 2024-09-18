import endPoints from "@/services";
import axios from "axios";
import debounce from "lodash.debounce";
import React, { useState } from "react";

export const useSearch = () => {
  const [searchText, setsearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handlerDebouncer = debounce(async (searchText) => {
    try {
      if (searchText === "") {
        setSearchResults([]); ////set array to empty array
        return;
      }
      const results = await axios.get(endPoints.search(searchText));
      setSearchResults(results.data.results);
    } catch (error) {
      console.log(error);
    }
  }, 800);

  return {
    handlerDebouncer,
    searchText,
    searchResults,
    setsearchText,
  };
};
