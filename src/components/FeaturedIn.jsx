import React from "react";

const FeaturedIn = () => {
  const brands = [
    "Nuvra.",
    "Lyniq",
    "Velora",
    "Ossyn",
    "Tavero*",
  ];

  return (
    <section className="bg-[#FAF7EB] py-16 flex justify-center items-center">
      <div className="bg-[#FFF59D] w-11/12 md:w-10/12 py-10 rounded-md shadow-md">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-medium text-[#263A3A] mb-8">
          Featured In
        </h2>

        {/* Brands */}
        <div className="flex flex-wrap justify-center items-center gap-10 text-[#263A3A] text-xl md:text-2xl font-serif">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
