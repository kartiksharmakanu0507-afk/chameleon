type Props = {
  theme: {
    image: string;
    title: string;
    icon: string;
    color: string;
  };
};

export default function Hero({ theme }: Props) {

  return (

    <section className="relative flex items-start px-12 h-[820px] bg-black overflow-hidden -mt-6">

      {/* LEFT TEXT */}

      <div className="relative z-20 w-[42%] pt-16">

        <p
          className="tracking-[7px] font-semibold mb-6 text-[18px]"
          style={{ color: theme.color }}
        >

          ADAPT. EVOLVE. DOMINATE.

        </p>

        <h1 className="text-[120px] leading-[98px] font-black">

          CHANGE
          <br />

          IS YOUR
          <br />

          <span
            style={{
              color: theme.color,
              fontSize: "102px",
            }}
          >

            STRENGTH.

          </span>

        </h1>

        <p className="text-gray-400 text-[22px] leading-[42px] mt-8">

          Premium streetwear that adapts to you.
          <br />

          Dynamic colors. Limitless expression.

        </p>

        <div className="flex gap-6 mt-10">

          <button
            className="px-11 py-5 rounded-full font-bold text-black text-lg"
            style={{ backgroundColor: theme.color }}
          >

            EXPLORE COLLECTION

          </button>

          <button className="border border-gray-700 px-11 py-5 rounded-full text-lg">

            WATCH SHOWREEL

          </button>

        </div>

      </div>

      {/* CHAMELEON */}

      <div className="absolute right-[-140px] top-[-120px] z-10">

        <img
          src={theme.image}
          alt="Chameleon"
          className={`object-contain ${
            theme.title === "FOREST"
              ? "h-[1280px]"
              : "h-[1100px]"
          }`}
        />

      </div>

      {/* MODE TEXT */}

      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20">

        <h1
          className="text-[54px] font-black flex items-center gap-2"
          style={{ color: theme.color }}
        >

          {theme.title} {theme.icon}

        </h1>

      </div>

    </section>

  );

}