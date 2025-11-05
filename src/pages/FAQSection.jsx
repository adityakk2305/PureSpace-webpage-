import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const faqsData = {
  general: [
    {
      question: "What is an FAQ section?",
      answer:
        "An FAQ section is a list of commonly asked questions and answers about your business, products, or services.",
    },
    {
      question: "Why do FAQs matter?",
      answer:
        "FAQs help customers find quick answers, reduce support requests, and build trust with your audience.",
    },
    {
      question: "Where can I add my FAQs?",
      answer:
        "FAQs can be added to any page on your site or mobile app, giving easy access to members on the go.",
    },
  ],
  setup: [
    {
      question: "How do I create an FAQ section?",
      answer:
        "You can create it using collapsible panels or accordions to organize questions efficiently.",
    },
    {
      question: "Can I categorize FAQs?",
      answer:
        "Yes, you can group FAQs by topic to make them easier to browse for your users.",
    },
  ],
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = faqsData[activeTab].filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1a2b2b] mb-6 md:mb-0">
            Frequently Asked Questions
          </h2>

          {/* Search Bar */}
          <div className="flex items-center border-b-2 border-[#1a2b2b]">
            <input
              type="text"
              placeholder="Looking for something?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none px-3 py-2 text-[#1a2b2b] text-lg"
            />
            <Search size={22} className="text-[#1a2b2b]" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 border-b border-gray-300 mb-10">
          <button
            className={`pb-3 text-xl font-medium transition-colors ${
              activeTab === "general"
                ? "border-b-2 border-[#1a2b2b] text-[#1a2b2b]"
                : "text-gray-500 hover:text-[#1a2b2b]"
            }`}
            onClick={() => {
              setActiveTab("general");
              setOpenIndex(null);
            }}
          >
            General
          </button>
          <button
            className={`pb-3 text-xl font-medium transition-colors ${
              activeTab === "setup"
                ? "border-b-2 border-[#1a2b2b] text-[#1a2b2b]"
                : "text-gray-500 hover:text-[#1a2b2b]"
            }`}
            onClick={() => {
              setActiveTab("setup");
              setOpenIndex(null);
            }}
          >
            Setting up FAQs
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 font-medium text-[#1a2b2b] text-lg"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 border-t border-gray-200 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
