import React from "react";

const PlansSection = () => {
  return (
    <section className="bg-[#4e5a5a] text-[#f5f2e9] py-20 px-6 flex flex-col lg:flex-row justify-center items-center gap-16">
      {/* Left Text Section */}
      <div className="max-w-md text-center lg:text-left">
        <h2 className="text-4xl font-semibold leading-snug mb-4">
          Our Plans & <br /> Special Discounts
        </h2>
        <p className="text-sm leading-relaxed mb-8 text-[#e5e2d7]">
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. I'm a paragraph. Click here to add your own text and edit me.
          It's easy.
        </p>
        <button className="bg-[#f5f2e9] text-[#2f3b3b] px-8 py-3 rounded-full text-sm font-medium border border-[#f5f2e9] hover:bg-transparent hover:text-[#f5f2e9] transition-all duration-300">
          Choose Your Plan
        </button>
      </div>

      {/* Right Plan Card */}
      <div className="relative">
        {/* Best Value Tag */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2f3b3b] text-white text-xs px-3 py-1 rounded">
          Best Value
        </div>

        {/* Plan Card */}
        <div className="bg-[#f9f5b6] rounded-t-2xl w-[320px] shadow-lg overflow-hidden">
          <div className="py-10 px-6">
            <h3 className="text-[#2f3b3b] text-lg font-medium mb-3">
              The Bi-Monthly Plan
            </h3>
            <div className="flex justify-center items-end">
              <span className="text-[#2f3b3b] text-5xl font-semibold">₹280</span>
            </div>
            <p className="text-[#2f3b3b] text-xs mt-2">Every month</p>

            <button className="mt-6 bg-[#1a2b2b] text-white w-full py-3 rounded-full text-sm border border-[#1a2b2b] hover:bg-transparent hover:text-[#1a2b2b] transition-all duration-300">
              Select
            </button>
          </div>

          {/* Benefits List */}
          <div className="bg-white text-[#1a2b2b] py-6 px-8 space-y-3 rounded-b-2xl">
            {Array(5)
              .fill("I'm a benefit")
              .map((text, i) => (
                <p key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-lg">→</span> {text}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
