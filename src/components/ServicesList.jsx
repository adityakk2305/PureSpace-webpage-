import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state;

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Service Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-[#032b27] text-white px-5 py-2 rounded-full"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="bg-[#f8f7f2] text-[#1a2b2b] min-h-screen px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Image Banner */}
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-80 object-cover rounded-2xl mb-8"
        />

        <h1 className="text-4xl font-semibold mb-3">{service.title}</h1>
        <p className="text-gray-700 mb-6">{service.description}</p>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-gray-800">1 hr</span>
          <span className="text-gray-800">{service.price}</span>
        </div>

        <button className="bg-[#032b27] hover:bg-[#06433c] text-white px-6 py-3 rounded-full">
          Book Now
        </button>

        <hr className="my-10 border-gray-300" />

        <div>
          <h2 className="text-xl font-semibold mb-2">Service Description</h2>
          <p className="text-gray-600">
            Describe your service here. What makes it great? Use short catchy
            text to tell people what you offer, and the benefits they will
            receive. A great description gets readers in the mood, and makes
            them more likely to go ahead and book.
          </p>
        </div>

        <hr className="my-10 border-gray-300" />

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
          <p className="text-gray-600">San Francisco, CA, USA</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
