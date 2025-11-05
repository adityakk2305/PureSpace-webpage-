import React from "react";
import kitchenImg from "../assets/Images/kitchenImg.jpg"; // ✅ replace with your image

const HeroSection = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: `url(${kitchenImg})` }}
    >
      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✅ Text Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-white w-full md:w-[45%] space-y-6 mt-24">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight drop-shadow-lg">
Purely Fresh.            <br /> Effortlessly Clean.
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Delivering spotless spaces for busy lives. Always punctual, always pleasant.
          </p>
          <button className="bg-white text-black font-medium px-10 py-3 rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
