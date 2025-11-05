import React from "react";
import aboutImg from "../assets/Images/About-pageimg.jpg"; // 🖼️ your image path
import TeamSection from "./TeamSection";
import FAQSection from "./FAQSection";
import WorkWithUs from "./WorkWithUs";
// import AboutUsSection from "./AboutUsSection";

const AboutSection = () => {
  return (
    <>
     <section className="bg-[#faf8ed] py-16 flex flex-col items-center text-center">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-4xl font-semibold text-[#1a2b2b] mb-2">About Us</h2>
        <p className="text-lg text-[#1a2b2b]">
          Our story is a passion for clean homes and happy clients
        </p>
      </div>

      {/* Video Section */}
      <div className="w-[90%] max-w-6xl overflow-hidden rounded-xl shadow-md">
        <video
          src="https://video.wixstatic.com/video/c837a6_2230293c8f9741828d8b0af12c7407e0/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[400px] object-cover"
        />
      </div>
    </section>
    <section className="bg-[#f8f7f2] flex flex-col lg:flex-row items-center justify-center py-16 px-8">
      
      {/* ✅ Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
        <img
          src={aboutImg}
          alt="About us"
          className="w-[480px] h-[270px] rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* ✅ Right Side - Text */}
      <div className="w-full lg:w-1/2 lg:pl-12 text-[#1a2b2b]">
        <h2 className="text-4xl font-semibold  text-black inline-block px-3 py-1 mb-4">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed max-w-md">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
       
      </div>
       
    </section>
    <TeamSection />
    <FAQSection/>
    <WorkWithUs/>
    </>
  );
};

export default AboutSection;
