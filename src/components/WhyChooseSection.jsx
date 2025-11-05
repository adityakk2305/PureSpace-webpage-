import React, { useEffect, useState } from "react";
import cleaningImg from "../assets/Images/Why Chooseimg.jpg";

const WhyChooseSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY * 0.3);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#f5f2e9] text-[#1a2b2b] py-24 lg:py-32 overflow-hidden">
      {/* 🖼️ Fixed Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${cleaningImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${offsetY * 0.15}px)`,
          transition: "transform 0.2s linear",
          opacity: 0.15,
        }}
      ></div>

      {/* 🌈 Content Overlay */}
      <div className="relative z-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* 🧾 Right Text Section */}
        <div className="max-w-xl text-center lg:text-left bg-[#f5f2e9]/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-semibold mb-10">
            Why Choose The PureSpace
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Qualified Team",
                text: "Our professionals are trained and certified for high-quality results.",
              },
              {
                title: "Same Day Availability",
                text: "Book today and enjoy hassle-free same-day cleaning services.",
              },
              {
                title: "Outstanding Support",
                text: "Friendly and reliable customer assistance, anytime you need.",
              },
              {
                title: "Eco-Friendly Materials",
                text: "We use safe, sustainable, and non-toxic cleaning products.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-[#1a2b2b] text-[#f5f2e9] w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">
                  ★
                </div>
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-[#444] mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-[#1a2b2b] text-[#f5f2e9] px-8 py-3 rounded-full text-sm font-medium border border-[#1a2b2b] hover:bg-[#f5f2e9] hover:text-[#1a2b2b] transition-all duration-300">
            Get to Know Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
