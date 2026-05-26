"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CollectionCard from "../components/CollectionCard";

export default function Home() {

  const [theme, setTheme] = useState({
    image: "/hero-chameleon.png",
    title: "FOREST",
    icon: "✦",
    color: "#84ff00",
  });

  return (

    <main className="bg-black min-h-screen text-white overflow-hidden">

      <Navbar />

      <Hero theme={theme} />

      <section className="flex justify-center gap-2 px-2 mt-6 pb-20 flex-nowrap">

        <div
          onClick={() =>
            setTheme({
              image: "/forest.jpg",
              title: "FOREST",
              icon: "✦",
              color: "#84ff00",
            })
          }
        >

          <CollectionCard
            title="FOREST"
            image="/forest.jpg"
            color="#84ff00"
            icon="✦"
          />

        </div>

        <div
          onClick={() =>
            setTheme({
              image: "/danger.jpg",
              title: "DANGER",
              icon: "⬢",
              color: "#ff2a2a",
            })
          }
        >

          <CollectionCard
            title="DANGER"
            image="/danger.jpg"
            color="#ff2a2a"
            icon="⬢"
          />

        </div>

        <div
          onClick={() =>
            setTheme({
              image: "/night.jpg",
              title: "NIGHT",
              icon: "◐",
              color: "#3b82f6",
            })
          }
        >

          <CollectionCard
            title="NIGHT"
            image="/night.jpg"
            color="#3b82f6"
            icon="◐"
          />

        </div>

        <div
          onClick={() =>
            setTheme({
              image: "/sun.jpg",
              title: "SUN",
              icon: "✹",
              color: "#ffd000",
            })
          }
        >

          <CollectionCard
            title="SUN"
            image="/sun.jpg"
            color="#ffd000"
            icon="✹"
          />

        </div>

      </section>

    </main>

  );

}