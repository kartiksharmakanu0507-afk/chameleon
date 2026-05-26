"use client";

import Link from "next/link";
import { useState } from "react";

import { useCart } from "@/context/CartContext";

import AuthModal from "./AuthModal";

export default function Navbar() {

  const {
    cart,
    showCart,
    setShowCart,
  } = useCart();

  const [openAuth, setOpenAuth] =
    useState(false);

  return (

    <>

      <nav className="relative z-50 flex items-center justify-between">

        {/* LOGO */}

        <Link href="/">

          <h1 className="text-[68px] font-black text-lime-400 cursor-pointer">

            CHAMELEON

          </h1>

        </Link>

        {/* CENTER LINKS */}

        <div className="flex items-center gap-14 text-[28px] font-bold">

          <Link
            href="/"
            className="hover:text-lime-400 transition-all"
          >

            HOME

          </Link>

          <Link
            href="/product"
            className="hover:text-lime-400 transition-all"
          >

            SHOP

          </Link>

          <button className="hover:text-lime-400 transition-all">

            COLLECTIONS

          </button>

          <button className="hover:text-lime-400 transition-all">

            ABOUT

          </button>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-5">

          {/* CART */}

          <button
            onClick={() =>
              setShowCart(!showCart)
            }
            className="relative w-16 h-16 rounded-full border border-[#2a2a2a] flex items-center justify-center text-2xl"
          >

            🛒

            {cart.length > 0 && (

              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-lime-400 text-black text-sm font-black flex items-center justify-center">

                {cart.reduce(
                  (
                    acc: number,
                    item: any
                  ) =>
                    acc +
                    item.quantity,
                  0
                )}

              </div>

            )}

          </button>

          {/* SHOP BUTTON */}

          <Link href="/product">

            <button className="bg-lime-400 text-black px-10 py-5 rounded-full text-2xl font-black hover:scale-105 transition-all">

              SHOP NOW

            </button>

          </Link>

          {/* SIGN IN */}

          <button
            onClick={() =>
              setOpenAuth(true)
            }
            className="border border-lime-400 px-8 py-5 rounded-full text-xl font-bold hover:bg-lime-400 hover:text-black transition-all"
          >

            SIGN IN

          </button>

        </div>

      </nav>

      {/* AUTH MODAL */}

      <AuthModal
        isOpen={openAuth}
        onClose={() =>
          setOpenAuth(false)
        }
      />

    </>

  );

}