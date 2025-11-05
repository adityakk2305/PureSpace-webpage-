// import React, { useState } from "react";

// const EstimateForm = () => {
//   // --- Form State ---
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     rooms: "",
//     service: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   // --- Handle Input Change ---
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" }); // clear error as user types
//   };

//   // --- Validation ---
//   const validate = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Enter a valid email";
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.address.trim()) newErrors.address = "Address is required";
//     if (!formData.city.trim()) newErrors.city = "City is required";
//     if (!formData.rooms.trim()) newErrors.rooms = "Please select number of rooms";
//     if (!formData.service.trim()) newErrors.service = "Please select a service";

//     return newErrors;
//   };

//   // --- Submit Handler ---
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setSuccess(false);
//     } else {
//       setErrors({});
//       setSuccess(true);
//       console.log("Form submitted successfully:", formData);

//       // Reset form after 2s
//       setTimeout(() => {
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           address: "",
//           city: "",
//           rooms: "",
//           service: "",
//         });
//         setSuccess(false);
//       }, 2500);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-[#FFF59D] flex items-center justify-center py-12 px-4">
//       <div className="bg-[#FFF59D] max-w-4xl w-full p-10 rounded-lg shadow-lg border border-black">
//         {/* Title */}
//         <h2 className="text-3xl font-semibold text-center text-black mb-2">
//           Get a Free Estimate
//         </h2>
//         <p className="text-center text-gray-800 mb-8">Contact us</p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* First name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 mb-1">
//               First name *
//             </label>
//             <input
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
//                 errors.firstName ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
//               }`}
//             />
//             {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//           </div>

//           {/* Last name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 mb-1">
//               Last name *
//             </label>
//             <input
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
//                 errors.lastName ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
//               }`}
//             />
//             {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 mb-1">
//               Email *
//             </label>
//             <input
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
//                 errors.email ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
//               }`}
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 mb-1">
//               Phone number *
//             </label>
//             <input
//               name="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={handleChange}
//               className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
//                 errors.phone ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
//               }`}
//             />
//             {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 mb-1">
//               Address *
//             </label>
//             <input
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
//                 errors.address ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
//               }`}
//             />
//             {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//           </div>

//           {/* City */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 mb-1">
//               City *
//             </label>
//             <input
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
//                 errors.city ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
//               }`}
//             />
//             {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
//           </div>

//           {/* Rooms */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 mb-1">
//               Number of rooms *
//             </label>
//             <select
//               name="rooms"
//               value={formData.rooms}
//               onChange={handleChange}
//               className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
//                 errors.rooms ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
//               }`}
//             >
//               <option value="">Select</option>
//               <option value="1">1 Room</option>
//               <option value="2">2 Rooms</option>
//               <option value="3">3 Rooms</option>
//             </select>
//             {errors.rooms && <p className="text-red-500 text-xs mt-1">{errors.rooms}</p>}
//           </div>

//           {/* Service */}
//           <div>
//             <label className="block text-sm font-medium text-gray-900 mb-1">
//               Choose your service *
//             </label>
//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
//                 errors.service ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"
//               }`}
//             >
//               <option value="">Select</option>
//               <option value="cleaning">Cleaning</option>
//               <option value="painting">Painting</option>
//               <option value="maintenance">Maintenance</option>
//             </select>
//             {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
//           </div>
//         </form>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-8">
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="bg-[#0A1F1C] text-white font-semibold py-2 px-8 rounded-full hover:bg-black transition-all"
//           >
//             Get a Quote
//           </button>
//         </div>

//         {/* Success Message */}
//         {success && (
//           <p className="text-green-600 text-center mt-6 font-medium animate-pulse">
//             ✅ Your form has been submitted successfully!
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EstimateForm;


import React, { useState } from "react";

const EstimateForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

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
    required.forEach((field) => {
      if (!formData[field]?.trim()) newErrors[field] = "Required";
    });
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    return newErrors;
  };

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
    <section className="relative flex justify-end -mt-36 md:-mt-40 lg:-mt-52 mb-28 px-6">
      {/* Floating Form Card */}
      <div className="bg-[#FFF59D] rounded-2xl shadow-2xl p-10 w-full max-w-4xl border border-gray-300 relative z-20">
        <h2 className="text-3xl font-semibold text-center text-[#0A1F1C] mb-2">
          Get a Free Estimate
        </h2>
        <p className="text-center text-[#0A1F1C] mb-8">Contact us</p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {/* Text Inputs */}
          {[
            { label: "First name *", name: "firstName" },
            { label: "Last name *", name: "lastName" },
            { label: "Email *", name: "email", type: "email" },
            { label: "Phone number *", name: "phone", type: "tel" },
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

          {/* Choose Service */}
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

        {/* Button */}
        <div className="flex justify-center mt-10">
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

export default EstimateForm;
