type Props = {
  title: string;
  image: string;
  color: string;
  icon: string;
};

export default function CollectionCard({
  title,
  image,
  color,
  icon,
}: Props) {

  return (

    <div className="relative w-[410px] h-[190px] rounded-[28px] overflow-hidden border border-gray-800 group flex-shrink-0">

      <img
        src={image}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/5 flex flex-col justify-end items-start p-6">

        <span
          className="text-xl mb-2"
          style={{ color: color }}
        >

          {icon}

        </span>

        <h1 className="text-[26px] font-bold tracking-wide leading-none">

          {title}

        </h1>

        <p className="text-gray-200 text-[13px] mt-1">

          COLLECTION

        </p>

        <button
          className="mt-1 text-[14px]"
          style={{ color: color }}
        >

          EXPLORE →

        </button>

      </div>

    </div>

  );

}