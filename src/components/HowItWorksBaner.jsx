import React from "react";
import { Droplet, Shirt, Key, Home } from "lucide-react";
import bgImage from "../assets/Images/Banerimg.jpg"; // 👈 your local background image

const steps = [
  {
    icon: <Droplet className="w-10 h-10 text-gray-600 opacity-90" />, // lighter icon
    title: "Choose your desired cleaning service",
  },
  {
    icon: <Shirt className="w-10 h-10 text-gray-600 opacity-90" />,
    title: "Use the Cleanic App for laundry pickup",
  },
  {
    icon: <Key className="w-10 h-10 text-gray-600 opacity-90" />,
    title: "Leave us the keys and we’ll take care of the rest",
  },
  {
    icon: <Home className="w-10 h-10 text-gray-600 opacity-90" />,
    title: "Welcome back to your home clean home!",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative text-center py-20 px-4 bg-[#fdfbf6] overflow-hidden">
      {/* Background Image with Lighter Blur + Fade */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="How it works background"
          className="w-full h-full object-cover blur-[2px] brightness-85 scale-105"
        />
      </div>

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-semibold mb-12 drop-shadow-md">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white transition-transform hover:scale-105"
            >
              <div className="bg-[#fff27a]/90 rounded-full p-6 flex items-center justify-center shadow-lg mb-4">
                {step.icon}
              </div>
              <p className="text-sm font-medium leading-relaxed">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
