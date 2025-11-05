import React from "react";
import HeroSection from "../components/HeroSection";
import EstimateForm from "../components/EstimateForm";
import ServicesSection from "../components/Services";
import FeaturedIn from "../components/FeaturedIn";
import BeforeAfter from "../components/carousel-before-after";
import HowItWorks from "../components/HowItWorksBaner";
import PlansSection from "../components/PlansSection";
import WhyChooseSection from "../components/WhyChooseSection";
import StorageSection from "../components/Baner-2";
import AboutSection from "./About";
import TeamSection from "./TeamSection";
import TestimonialSection from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <EstimateForm />
      </div>

      <div className="mt-32 space-y-28">
        <TestimonialSection />
        <ServicesSection />
        <FeaturedIn />
        <BeforeAfter />
        <HowItWorks/>
        <PlansSection />
        <WhyChooseSection/> 
        <StorageSection />
        
        
            </div>

    </>
  );
};

export default Home;
