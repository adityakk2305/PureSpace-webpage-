import React, { useState } from "react";
import bgImg from "../assets/Images/Baner-3img.jpg"; // replace with your image name

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.position.trim()) newErrors.position = "Please select a position";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section className="relative w-full h-screen flex justify-end items-center">
      {/* ✅ Background Image with LESS Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[1px] brightness-75"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>

      {/* ✅ Form Section */}
      <div className="relative z-10 bg-[#f8f7f2] p-10 rounded-xl w-full max-w-md mr-20 shadow-xl">
        <h2 className="text-center text-lg font-medium text-[#1a2b2b] mb-2">
          Work with Us
        </h2>
        <p className="text-center text-sm text-[#1a2b2b]/80 mb-6">
          Join our team for a fulfilling and rewarding career.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#1a2b2b]">First name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
                  errors.firstName ? "border-red-500" : "border-[#c5c5c5]"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-[#1a2b2b]">Last name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
                  errors.lastName ? "border-red-500" : "border-[#c5c5c5]"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm text-[#1a2b2b]">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
                errors.email ? "border-red-500" : "border-[#c5c5c5]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#1a2b2b]">Phone number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 py-2 focus:outline-none ${
                  errors.phone ? "border-red-500" : "border-[#c5c5c5]"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-[#1a2b2b]">Position *</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 py-2 bg-white focus:outline-none ${
                  errors.position ? "border-red-500" : "border-[#c5c5c5]"
                }`}
              >
                <option value="">Select</option>
                <option>Cleaner</option>
                <option>Manager</option>
                <option>Support</option>
              </select>
              {errors.position && (
                <p className="text-red-500 text-xs mt-1">{errors.position}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm text-[#1a2b2b]">Tell us more</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full border border-[#c5c5c5] rounded-md px-3 py-2 focus:outline-none focus:border-[#1a2b2b]"
            ></textarea>
          </div>

          {/* ✅ Button with Hover White Effect */}
          <button
            type="submit"
            className="w-full bg-[#1a2b2b] text-white py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-[#1a2b2b] border border-[#1a2b2b]"
          >
            Apply Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default WorkWithUs;
