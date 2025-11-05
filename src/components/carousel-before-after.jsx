// import React from "react";

// // ✅ Correct unique variable names for each image
// import sofaBeforeImg from "../assets/Images/sofa-before.jpg";
// import windowBeforeImg from "../assets/Images/window-before.jpg";
// import carpetBeforeImg from "../assets/Images/carpait-before.jpg";

// import sofaAfterImg from "../assets/Images/sofa-after.jpg";
// import windowAfterImg from "../assets/Images/window-after.jpg";
// import carpetAfterImg from "../assets/Images/carpait-after.jpg";

// const BeforeAfter = () => {
//   return (
//     <section className="bg-[#FAF7EB] py-16 flex flex-col justify-center items-center">
//       {/* Title */}
//       <h2 className="text-3xl md:text-4xl font-semibold text-[#263A3A] mb-2">
//         Before & After
//       </h2>
//       <p className="text-[#263A3A] text-lg mb-10">Our Cleaning Results</p>

//       {/* Image Grid */}
//       <div className="grid md:grid-cols-3 gap-10 bg-[#FFF59D] px-8 py-10 rounded-xl shadow-md w-11/12 md:w-10/12">
//         {/* Sofa */}
//         <div className="text-center">
//           <img
//             src={sofaBeforeImg}
//             alt="Sofa Before"
//             className="rounded-md w-[350px] md:w-[400px] shadow-sm mx-auto"
//           />
//           <p className="mt-3 text-[#263A3A] font-medium">Before</p>
//           <img
//             src={sofaAfterImg}
//             alt="Sofa After"
//             className="rounded-md w-[350px] md:w-[400px] shadow-sm mt-5 mx-auto"
//           />
//           <p className="mt-3 text-[#263A3A] font-medium">After</p>
//         </div>

//         {/* Window */}
//         <div className="text-center">
//           <img
//             src={windowBeforeImg}
//             alt="Window Before"
//             className="rounded-md w-[350px] md:w-[400px] shadow-sm mx-auto"
//           />
//           <p className="mt-3 text-[#263A3A] font-medium">Before</p>
//           <img
//             src={windowAfterImg}
//             alt="Window After"
//             className="rounded-md w-[350px] md:w-[400px] shadow-sm mt-5 mx-auto"
//           />
//           <p className="mt-3 text-[#263A3A] font-medium">After</p>
//         </div>

//         {/* Carpet */}
//         <div className="text-center">
//           <img
//             src={carpetBeforeImg}
//             alt="Carpet Before"
//             className="rounded-md w-[350px] md:w-[400px] shadow-sm mx-auto"
//           />
//           <p className="mt-3 text-[#263A3A] font-medium">Before</p>
//           <img
//             src={carpetAfterImg}
//             alt="Carpet After"
//             className="rounded-md w-[350px] md:w-[400px] shadow-sm mt-5 mx-auto"
//           />
//           <p className="mt-3 text-[#263A3A] font-medium">After</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BeforeAfter;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import images
import sofaBefore from "../assets/Images/sofa-before.jpg";
import sofaAfter from "../assets/Images/sofa-after.jpg";
import windowBefore from "../assets/Images/window-before.jpg";
import windowAfter from "../assets/Images/window-after.jpg";
import carpetBefore from "../assets/Images/carpait-before.jpg";
import carpetAfter from "../assets/Images/Carpait-after.jpg";

const BeforeAfter = () => {
  // ✅ Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true, // ✅ Fades instead of sliding
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    cssEase: "linear",
  };

  const cleaningData = [
    {
      title: "Carpet cleaning",
      before: carpetBefore,
      after: carpetAfter,
    },
    {
      title: "Sofa cleaning",
      before: sofaBefore,
      after: sofaAfter,
    },
    {
      title: "Window cleaning",
      before: windowBefore,
      after: windowAfter,
    },
  ];

  return (
    <section className="bg-[#FAF7EB] min-h-screen flex flex-col justify-center items-center py-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#263A3A] mb-2 text-center">
        Before & After
      </h2>
      <p className="text-[#263A3A] text-lg mb-10 text-center">
        Carpet cleaning
      </p>

      {/* Carousel Container */}
      <div className="w-full md:w-9/12 lg:w-7/12 bg-[#FAF7EB] rounded-lg shadow-none">
        <Slider {...settings}>
          {cleaningData.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                {/* Before */}
                <div className="text-center">
                  <img
                    src={item.before}
                    alt={`${item.title} before`}
                    className="rounded-xl w-[400px] md:w-[500px] shadow-md"
                  />
                  <p className="mt-3 text-[#263A3A] font-medium">Before</p>
                </div>

                {/* After */}
                <div className="text-center">
                  <img
                    src={item.after}
                    alt={`${item.title} after`}
                    className="rounded-xl w-[400px] md:w-[500px] shadow-md"
                  />
                  <p className="mt-3 text-[#263A3A] font-medium">After</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BeforeAfter;

