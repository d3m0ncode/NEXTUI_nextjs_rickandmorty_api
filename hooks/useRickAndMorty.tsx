import { InterfazApp, Result } from "@/interfaces/appInterface";
import getCharacters from "@/services/rickService";
import React, { useRef, useState } from "react";

export const useRickAndMorty = () => {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const nextPage = useRef(1);

  const getPersonajes = async () => {
    const response = await getCharacters(nextPage.current);
    console.log(response, "response hook");
    if (response) {
      if (response.data.info.next === null) {
        setHasMore(false);
        return;
      }
      nextPage.current = response.data.info.next.match(/page=(\d+)/)[1]; ///traer los digitos de el "?page"
      setCharacters([...characters, ...response?.data.results]);
    }
  };

  return {
    getPersonajes,
    characters,
    hasMore,
  };
};
