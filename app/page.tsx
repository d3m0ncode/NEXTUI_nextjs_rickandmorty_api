"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect } from "react";

import CardCharacter from "@/components/CardCharacter";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRickAndMorty } from "@/hooks/useRickAndMorty";
import { Spinner } from "@nextui-org/react";

export default function Home() {
  const { getPersonajes, characters, hasMore } = useRickAndMorty();

  useEffect(() => {
    getPersonajes();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <h1 className={title({ color: "violet" })}>
            rick and morty api&nbsp;
          </h1>
        </div>
        {/* SCROLL INFINITO  */}
        <InfiniteScroll
          dataLength={characters.length} //This is important field to render the next data
          next={getPersonajes}
          hasMore={hasMore} ///TODO:CREAR ESTADO
          loader={
            <div className="text-center py-4  ">
              <Spinner color="primary" />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              /////recorrer personajes
              characters.map((character) => (
                <CardCharacter key={character.id} {...character} />
              ))
            }
          </div>
        </InfiniteScroll>
      </section>
    </>
  );
}
