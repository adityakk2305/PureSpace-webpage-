import React from "react";

// 🖼️ Import your team images
import member1 from "../assets/Images/member-1.jpg";
import member2 from "../assets/Images/member-2.jpg";
import member3 from "../assets/Images/member-3.jpg";
import member4 from "../assets/Images/member-4.jpg";
import member5 from "../assets/Images/member-5.jpg";
import member6 from "../assets/Images/member-6.jpg";

const teamMembers = [
  { id: 1, name: "Roni Lavine", role: "CEO", img: member1 },
  { id: 2, name: "Shonad Evian", role: "CTO", img: member2 },
  { id: 3, name: "Yul Mclean", role: "Cleaner", img: member3 },
  { id: 4, name: "Jade Leno", role: "Cleaner", img: member4 },
  { id: 5, name: "Lewis Baraka", role: "Cleaner", img: member5 },
  { id: 6, name: "Coral Tyde", role: "Cleaner", img: member6 },
];

const TeamSection = () => {
  return (
    <section className="bg-[#f8f7f2] py-20 px-6">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-[#1a2b2b] text-center mb-12">
        Our Stellar Team
      </h2>

      {/* ✅ Single Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-[#fef7a3] rounded-xl overflow-hidden shadow-md w-[250px] text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4 text-[#1a2b2b]">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-[#333]">{member.role}</p>
              <p className="text-sm mt-2 leading-snug">
                This is your Team Member description. Use this space to write a
                brief description of this person’s role and responsibilities, or
                add a short bio.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
