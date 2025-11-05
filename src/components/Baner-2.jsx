import React from "react";
import storageImg from "../assets/Images/Baner-2img.jpg"; // replace with your image path

const StorageSection = () => {
  return (
    <section className="w-full h-screen bg-[#f8f7f2] flex justify-center items-center">
      <div className="w-full h-full overflow-hidden">
        <img
          src={storageImg}
          alt="Organized Storage"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default StorageSection;
