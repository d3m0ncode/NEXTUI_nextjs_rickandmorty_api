"use client";
import React, { useEffect } from "react";
import { SearchIcon } from "./icons";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { useSearch } from "@/hooks/useSearch";
import CardCharacter from "./CardCharacter";
import { Result } from "@/interfaces/appInterface";

const SearchInput = () => {
  ////hooksearch
  const { handlerDebouncer, searchText, searchResults, setsearchText } =
    useSearch();

  useEffect(() => {
    handlerDebouncer(searchText);
  }, [searchText]);

  return (
    <div className="relative">
      <Input
        onChange={(e) => setsearchText(e.target.value)}
        //style={{ width: "20vw" }}
        value={searchText}
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
      <div
        className="absolute top-10 right-0 justify-center "
        style={{ background: "#70e7ed94" }}
      >
        {searchResults.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 "
            style={{
              left: "-30vw",
              width: "80vw",
              maxHeight: "70vh",
              //maxWidth: "60%",
              minWidth: "10vw",
              overflowY: "scroll",
              zIndex: 1000,
            }}
          >
            {searchResults.map((result: Result) => (
              <div key={result.id} className="grid gap-4 ">
                <CardCharacter {...result} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
