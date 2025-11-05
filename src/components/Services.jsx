import React from "react";
import moveImg from "../assets/Images/ironman.jpg";
import deepCleanImg from "../assets/Images/ironman.jpg";
import laundryImg from "../assets/Images/ironman.jpg";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Move In/Move Out",
      description: "Perfect cleaning before or after moving to a new place.",
      price: "₹4000",
      img: moveImg,
    },
    {
      id: 2,
      title: "Deep Cleaning",
      description: "Thorough cleaning in every nook and cranny of your home.",
      price: "₹299",
      img: deepCleanImg,
    },
    {
      id: 3,
      title: "Laundry",
      description: "Quick and clean laundry service at your doorstep.",
      price: "₹1000",
      img: laundryImg,
    },
  ];

  const handleCardClick = (service) => {
    // navigate to new page with service data
    navigate(`/service/${service.id}`, { state: service });
  };

  return (
    <section className="bg-[#4B5B5B] py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#FAF7EB]">
          For Anything You Need
        </h2>
        <p className="text-[#FAF7EB]/80 mt-2 text-lg">Our stellar services</p>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service)}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-white text-lg font-medium">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* See All Services Button */}
      <div className="text-center mt-10">
        <button className="bg-[#FAF7EB] text-[#4B5B5B] px-6 py-2 rounded-full font-semibold hover:bg-[#e6e1d4] transition-all">
          See All Services
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
