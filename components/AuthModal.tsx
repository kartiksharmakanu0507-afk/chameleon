"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthModal({
  isOpen,
  onClose,
}: Props) {

  const [isLogin, setIsLogin] =
    useState(true);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit() {

    try {

      setLoading(true);

      const endpoint =
        isLogin
          ? "/api/login"
          : "/api/signup";

      const body = isLogin
        ? {
            email,
            password,
          }
        : {
            name,
            email,
            password,
          };

      const response =
        await fetch(endpoint, {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            body
          ),

        });

      const data =
        await response.json();

      alert(data.message);

      if (response.ok) {

        setName("");
        setEmail("");
        setPassword("");

        onClose();

      }

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  }

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center">

      <div className="w-[500px] bg-[#0a0a0a] border border-[#1f1f1f] rounded-[40px] p-10">

        {/* TITLE */}

        <h1 className="text-5xl font-black text-lime-400 text-center mb-10">

          {isLogin
            ? "LOGIN"
            : "SIGN UP"}

        </h1>

        {/* TOGGLE */}

        <div className="flex bg-[#111] rounded-full p-2 mb-8">

          <button
            onClick={() =>
              setIsLogin(true)
            }
            className={`flex-1 py-4 rounded-full text-xl font-black transition-all ${
              isLogin
                ? "bg-lime-400 text-black"
                : "text-white"
            }`}
          >

            LOGIN

          </button>

          <button
            onClick={() =>
              setIsLogin(false)
            }
            className={`flex-1 py-4 rounded-full text-xl font-black transition-all ${
              !isLogin
                ? "bg-lime-400 text-black"
                : "text-white"
            }`}
          >

            SIGN UP

          </button>

        </div>

        {/* NAME */}

        {!isLogin && (

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full h-[70px] bg-[#111] rounded-2xl px-6 text-xl outline-none mb-5"
          />

        )}

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="w-full h-[70px] bg-[#111] rounded-2xl px-6 text-xl outline-none mb-5"
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full h-[70px] bg-[#111] rounded-2xl px-6 text-xl outline-none mb-8"
        />

        {/* BUTTON */}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full h-[75px] rounded-full bg-lime-400 text-black text-2xl font-black hover:scale-105 transition-all disabled:opacity-50"
        >

          {loading
            ? "PLEASE WAIT..."
            : isLogin
            ? "LOGIN"
            : "CREATE ACCOUNT"}

        </button>

        {/* CLOSE */}

        <button
          onClick={onClose}
          className="w-full mt-5 text-gray-400 text-lg"
        >

          CLOSE

        </button>

      </div>

    </div>

  );

}