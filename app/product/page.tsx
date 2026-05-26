"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";

import { useCart } from "@/context/CartContext";

import { useTheme } from "@/context/ThemeContext";

const products = [
  {
    name: "Adaptive Hoodie",
    image: "/hoodie.png",
    price: "$129",
    sizes: ["S", "M", "L", "XL"],
  },

  {
    name: "Tech Jacket",
    image: "/jacket.png",
    price: "$199",
    sizes: ["S", "M", "L", "XL"],
  },

  {
    name: "Utility Pants",
    image: "/pants.png",
    price: "$149",
    sizes: ["M", "L", "XL"],
  },

  {
    name: "Chameleon Kicks",
    image: "/shoes.png",
    price: "$189",
    sizes: ["7", "8", "9", "10"],
  },
];

export default function ProductPage() {

  const [selected, setSelected] = useState(products[0]);

  const [size, setSize] = useState(products[0].sizes[0]);

  const [quantity, setQuantity] = useState(1);

  const {
    cart,
    setCart,
    showCart,
  } = useCart();

  const { theme } = useTheme();

  /* SAME THEME AS HOMEPAGE */

  const currentChameleon =
    theme === "danger"
      ? "/red-chameleon.png"
      : theme === "ocean"
      ? "/blue-chameleon.png"
      : theme === "night"
      ? "/night-chameleon.png"
      : "/main-chameleon.png";

  return (

    <div className="relative min-h-screen bg-black text-white px-10 pt-8 overflow-hidden">

      {/* BG CHAMELEON */}

      <img
        src={currentChameleon}
        alt="Chameleon"
        className="absolute right-[-120px] top-[20px] h-[1050px] object-contain opacity-25 pointer-events-none z-0"
      />

      {/* NAVBAR */}

      <div className="relative z-20">

        <Navbar />

      </div>

      {/* HERO */}

      <div className="relative z-20 mt-12">

        <p className="text-lime-400 tracking-[8px] text-xl font-bold mb-5">

          PREMIUM STREETWEAR

        </p>

        <h1 className="text-[120px] leading-[95px] font-black">

          SHOP
          <br />

          <span className="text-lime-400">

            PRODUCTS.

          </span>

        </h1>

        <p className="text-gray-400 text-2xl leading-10 mt-6">

          Adaptive fashion for the future.
          <br />

          Dynamic colors. Limitless expression.

        </p>

      </div>

      {/* MAIN */}

      <div className="relative z-20 flex items-start mt-8">

        {/* LEFT CARDS */}

        <div className="w-[22%] flex flex-col gap-5">

          {products.map((product) => (

            <div
              key={product.name}
              onClick={() => {
                setSelected(product);
                setSize(product.sizes[0]);
                setQuantity(1);
              }}
              className={`cursor-pointer border rounded-[28px] p-4 transition-all duration-300 ${
                selected.name === product.name
                  ? "border-lime-400 bg-[#0b0b0bcc]"
                  : "border-[#1a1a1a] bg-[#05050599]"
              }`}
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-[220px] object-contain mx-auto"
              />

            </div>

          ))}

        </div>

        {/* LINE */}

        <div className="w-[2px] h-[900px] bg-[#1f1f1f] mx-8 rounded-full" />

        {/* CENTER */}

        <div className="flex-1 flex items-start">

          {/* PRODUCT IMAGE */}

          <div className="relative z-20 -ml-40 -mt-10">

            <img
              src={selected.image}
              alt={selected.name}
              className="h-[760px] object-contain"
            />

          </div>

          {/* DETAILS */}

          <div className="relative z-20 pt-20 -ml-10 w-[340px]">

            <p className="text-lime-400 tracking-[6px] text-lg mb-4">

              PREMIUM STREETWEAR

            </p>

            <h1 className="text-[74px] leading-[70px] font-black uppercase">

              {selected.name}

            </h1>

            <p className="text-lime-400 text-5xl font-black mt-6">

              {selected.price}

            </p>

            {/* SIZE */}

            <div className="mt-12">

              <p className="text-gray-400 mb-4 text-xl">

                SIZE

              </p>

              <div className="flex gap-4 flex-wrap">

                {selected.sizes.map((s) => (

                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-16 min-w-[70px] px-6 rounded-full border text-xl font-bold transition-all ${
                      size === s
                        ? "bg-lime-400 border-lime-400 text-black"
                        : "border-[#333]"
                    }`}
                  >

                    {s}

                  </button>

                ))}

              </div>

            </div>

            {/* QUANTITY */}

            <div className="mt-12">

              <p className="text-gray-400 mb-4 text-xl">

                QUANTITY

              </p>

              <div className="flex items-center gap-6">

                <button
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                  className="w-16 h-16 rounded-full border border-[#333] text-3xl"
                >

                  -

                </button>

                <span className="text-4xl font-bold">

                  {quantity}

                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-16 h-16 rounded-full border border-[#333] text-3xl"
                >

                  +

                </button>

              </div>

            </div>

            {/* ADD TO CART */}

            <button
              onClick={() => {

                setCart([
                  ...cart,
                  {
                    name: selected.name,
                    image: selected.image,
                    price: selected.price,
                    size,
                    quantity,
                  },
                ]);

              }}
              className="mt-14 w-full py-6 rounded-full text-2xl font-black bg-lime-400 text-black hover:scale-105 transition-all"
            >

              ADD TO CART →

            </button>

          </div>

        </div>

        {/* CART */}

        {showCart && (

          <div className="w-[320px] ml-8 border-l border-[#222] pl-8 relative z-20">

            <h2 className="text-3xl font-black mb-8">

              CART

            </h2>

            <div className="flex flex-col gap-6 max-h-[720px] overflow-y-auto pr-3">

              {cart.map((item: any, index: number) => (

                <div
                  key={index}
                  className="border border-[#1f1f1f] rounded-3xl p-4 bg-[#0a0a0a]"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[120px] object-contain mx-auto"
                  />

                  <h3 className="text-xl font-bold mt-4">

                    {item.name}

                  </h3>

                  <p className="text-gray-400 mt-2">

                    Size: {item.size}

                  </p>

                  <p className="text-gray-400">

                    Qty: {item.quantity}

                  </p>

                  <p className="text-lime-400 text-2xl font-black mt-4">

                    {item.price}

                  </p>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>

  );

}