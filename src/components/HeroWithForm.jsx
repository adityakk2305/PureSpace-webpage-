import React, { useState } from "react";
import kitchenImg from "../assets/Images/kitchenImg.jpg"; // 🔥 Background Image

const HeroWithForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    rooms: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // --- handle input ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // --- validate ---
  const validate = () => {
    const newErrors = {};
    const required = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "rooms",
      "service",
    ];
    required.forEach((f) => {
      if (!formData[f]?.trim()) newErrors[f] = "Required";
    });
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    return newErrors;
  };

  // --- handle submit ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      console.log("Form submitted:", formData);
      setSuccess(true);
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          rooms: "",
          service: "",
        });
        setSuccess(false);
      }, 2000);
    }
  };

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url(${kitchenImg})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* LEFT SIDE CONTENT */}
      <div className="relative z-10 text-white max-w-6xl mx-auto w-full px-10 py-20 lg:py-32 lg:w-1/2">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
          Remarkably Cleaner.
          <br /> Amazingly Simpler.
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Providing spotless cleaning services for busy people since 2035.
          Always on time, always smiling.
        </p>
        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition">
          Book Now
        </button>
      </div>

      {/* RIGHT SIDE FORM CARD */}
      <div className="relative z-20 lg:absolute lg:bottom-[-180px] lg:right-[8%] bg-[#FFF59D] w-[90%] lg:w-[480px] rounded-2xl shadow-xl p-8 border border-gray-300">
        <h2 className="text-3xl font-semibold text-center text-[#0A1F1C] mb-2">
          Get a Free Estimate
        </h2>
        <p className="text-center text-[#0A1F1C] mb-8">Contact us</p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {[
            { label: "First name *", name: "firstName" },
            { label: "Last name *", name: "lastName" },
            { label: "Email *", name: "email", type: "email" },
            { label: "Phone *", name: "phone", type: "tel" },
            { label: "Address *", name: "address" },
            { label: "City *", name: "city" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-[#0A1F1C] mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`w-full border border-[#0A1F1C] rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors[name]
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#0A1F1C]"
                }`}
              />
              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Number of Rooms */}
          <div>
            <label className="block text-sm font-medium text-[#0A1F1C] mb-1">
              Number of rooms *
            </label>
            <select
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              className={`w-full border border-[#0A1F1C] rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                errors.rooms
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-[#0A1F1C]"
              }`}
            >
              <option value="">Select</option>
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4+ Rooms</option>
            </select>
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-[#0A1F1C] mb-1">
              Choose your service *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full border border-[#0A1F1C] rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                errors.service
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-[#0A1F1C]"
              }`}
            >
              <option value="">Select</option>
              <option value="cleaning">Cleaning</option>
              <option value="painting">Painting</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
        </form>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#0A1F1C] text-white font-medium py-3 px-10 rounded-full hover:bg-black transition-all"
          >
            Get a Quote
          </button>
        </div>

        {success && (
          <p className="text-green-600 text-center mt-6 font-medium animate-pulse">
            ✅ Form submitted successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroWithForm;
