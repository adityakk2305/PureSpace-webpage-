import React from "react";

const Testimonials = [
  {
    name: "Sarah Mehta, Pune",
    title: "““PureSpace made my home feel brand new!””",
    text: "I’ve never seen my place this spotless. Their team was friendly, fast, and super professional.",
  },
  {
    name: "Rahul Kapoor, Mumbai",
    title: "“Reliable, efficient, and always smiling!”",
    text: "They show up on time and leave everything sparkling. I trust PureSpace completely with my home.",
  },
  {
    name: "Neha Verma, Bengaluru",
    title: "“The best cleaning service I’ve ever used.””",
    text: "Every detail was taken care of — even the tiny corners I usually miss. Highly recommend",
  },
  {
    name: "Arjun Patel, Hyderabad",
    title: "“PureSpace saved me so much time!”",
    text: "As someone with a busy schedule, their quick and spotless cleaning is a lifesaver.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#FFFDE7] py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-left">
        Shiny Happy Clients
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF9C4] p-8 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div className="text-black text-lg mb-3">★★★★★</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{item.text}</p>
            <p className="text-gray-800 text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
