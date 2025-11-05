import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Deep Cleaning",
    description: "Thorough cleaning in every nook and cranny of your home.",
    price: "₹100",
    image: "/images/deep-cleaning.jpg",
  },
  {
    id: 2,
    title: "Furniture Cleaning",
    description: "Ensuring your furniture is refreshed, sanitized, and looks as good as new.",
    price: "₹150",
    image: "/images/furniture-cleaning.jpg",
  },
  {
    id: 3,
    title: "Kitchen Cleaning",
    description: "Leaving your kitchen spotless and hygienic.",
    price: "₹200",
    image: "/images/kitchen-cleaning.jpg",
  },
];

const ServicesList = () => {
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    navigate(`/service/${service.id}`, { state: service });
  };

  return (
    <section className="bg-[#f8f7f2] text-[#1a2b2b] py-20 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">Our Services</h2>
        <p className="text-gray-600 mt-2">What can we clean for you today</p>
      </div>

      <div className="space-y-10 max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service)}
            className="flex flex-col md:flex-row justify-between items-center bg-white rounded-2xl shadow hover:shadow-lg transition p-6 cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end mt-4 md:mt-0">
              <p className="font-medium text-lg">{service.price}</p>
              <button className="bg-[#032b27] hover:bg-[#06433c] text-white px-5 py-2 rounded-full mt-2">
                Book a Cleaner
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
