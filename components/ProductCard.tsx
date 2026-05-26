type Props = {
  image: string;
  title: string;
  price: string;
  sizes: string[];
};

export default function ProductCard({
  image,
  title,
  price,
  sizes,
}: Props) {

  return (

    <div className="bg-[#070707] border border-[#1a1a1a] rounded-3xl p-6 w-[320px] hover:border-[#84ff00] transition">

      <img
        src={image}
        className="w-full h-[320px] object-cover rounded-2xl"
      />

      <h1 className="text-3xl font-bold mt-6">

        {title}

      </h1>

      <p className="text-[#84ff00] text-2xl mt-3 font-semibold">

        {price}

      </p>

      <div className="flex items-center gap-3 mt-6">

        <button className="bg-[#84ff00] text-black flex-1 py-4 rounded-full font-bold text-lg hover:scale-105 transition">

          ADD TO CART →

        </button>

        <select className="bg-black border border-gray-700 px-4 rounded-full h-[58px] text-white outline-none">

          {sizes.map((size) => (

            <option key={size}>

              {size}

            </option>

          ))}

        </select>

      </div>

    </div>

  );

}