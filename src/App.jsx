import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import BookNow from "./pages/BookNow";
import Services from "./pages/Services";
import ServicesList from "./components/ServicesList";
import ServicesSection from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import LoginForm from "./pages/LoginForm";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="pt-20"> {/* space for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/booknow" element={<Plans />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/servicesList" element={<ServicesList />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/services" element={<Services />} />
         <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;




<video id="comp-lsmycuwj2_video" class="K8MSra" crossorigin="anonymous" playsinline="" preload="auto" loop="" autoplay="" src="https://video.wixstatic.com/video/c837a6_2230293c8f9741828d8b0af12c7407e0/1080p/mp4/file.mp4" style="height: 100%; width: 100%; object-fit: cover; object-position: center center; opacity: 1;"></video>