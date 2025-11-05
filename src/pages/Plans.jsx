import React from "react";

const PlansSection = () => {
  return (
    <section className="bg-[#f8f7f2] text-[#1a2b2b] py-20 px-6 flex flex-col justify-center items-center">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold mb-3">Our Plans</h2>
        <p className="text-lg text-gray-600">
          Elevate your living with our cleaning subscription plan.
        </p>
      </div>

      {/* Plans Container */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
        
        {/* Weekly Plan */}
        <div className="bg-white border-t border-b border-l-4 border-r-4 border-black rounded-md shadow-sm w-[320px] flex flex-col items-center">
          <div className="py-8">
            <h3 className="text-lg font-medium mb-2">The Weekly Plan</h3>
            <p className="text-3xl font-semibold">
              ₹480<span className="text-base font-light ml-1">/month</span>
            </p>
          </div>
          <button className="bg-[#0d2626] text-white rounded-full py-2 px-10 mb-6 hover:bg-[#1a2b2b] transition">
            Select
          </button>
          <div className="border-t w-full px-8 py-6 text-sm text-gray-700">
            {Array(5)
              .fill("I’m a benefit")
              .map((b, i) => (
                <p key={i} className="flex items-center gap-2 mb-2">
                  <span>→</span> {b}
                </p>
              ))}
          </div>
        </div>

        {/* Bi-Monthly Plan */}
        <div className="bg-[#fff8c9] border-t border-b border-l-4 border-r-4 border-black rounded-md shadow-md w-[320px] flex flex-col items-center relative scale-105">
          <span className="absolute -top-3 bg-[#0d2626] text-white text-xs px-3 py-1 rounded">
            Best Value
          </span>
          <div className="py-8">
            <h3 className="text-lg font-medium mb-2">The Bi-Monthly Plan</h3>
            <p className="text-3xl font-semibold">
              ₹280<span className="text-base font-light ml-1">/month</span>
            </p>
          </div>
          <button className="bg-[#0d2626] text-white rounded-full py-2 px-10 mb-6 hover:bg-[#1a2b2b] transition">
            Select
          </button>
          <div className="border-t w-full px-8 py-6 text-sm text-gray-700">
            {Array(5)
              .fill("I’m a benefit")
              .map((b, i) => (
                <p key={i} className="flex items-center gap-2 mb-2">
                  <span>→</span> {b}
                </p>
              ))}
          </div>
        </div>

        {/* Office Plan */}
        <div className="bg-white border-t border-b border-l-4 border-r-4 border-black rounded-md shadow-sm w-[320px] flex flex-col items-center">
          <div className="py-8">
            <h3 className="text-lg font-medium mb-2">The Office Plan</h3>
            <p className="text-3xl font-semibold">
              ₹950<span className="text-base font-light ml-1">/month</span>
            </p>
          </div>
          <button className="bg-[#0d2626] text-white rounded-full py-2 px-10 mb-6 hover:bg-[#1a2b2b] transition">
            Select
          </button>
          <div className="border-t w-full px-8 py-6 text-sm text-gray-700">
            {Array(5)
              .fill("I’m a benefit")
              .map((b, i) => (
                <p key={i} className="flex items-center gap-2 mb-2">
                  <span>→</span> {b}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
