"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "What are the primary sectors of the Mahbub Group of Industries?",
      answer:
        "The Mahbub Group is a diversified conglomerate operating across four primary sectors: Global Trading & Logistics, Construction & Real Estate, Hospitality & Dining, and Global Workforce Solutions.",
    },
    {
      question: "Is the Mahbub Group committed to sustainability?",
      answer:
        "Yes. We integrate environmental, social, and governance (ESG) factors into our core operations. This includes using eco-friendly materials in construction, promoting responsible sourcing, and ensuring ethical labor practices in our trading and workforce solutions.",
    },
    {
      question: "Where does the Mahbub Group primarily operate?",
      answer:
        "While we maintain a strong home presence, our operations are globally connected, with significant activity in Global Trading and Workforce Solutions across Asia, the Middle East, and beyond.",
    },
    {
      question:
        "What types of dining experiences do Excellency Restaurants offer?",
      answer:
        "Excellency Restaurants focuses on diverse, high-quality culinary experiences, ranging from casual dining to fine-dining concepts, often specializing in local and international cuisine prepared with premium ingredients.",
    },
    {
      question: "Can I book a private event or catering service?",
      answer:
        "Yes. Our Hospitality division offers comprehensive services for private events, corporate catering, and large-scale banqueting. Please contact our hospitality team via the Enquiry page to discuss your specific event requirements and options.",
    },
    {
      question:
        "What types of projects does your construction division handle?",
      answer:
        "We specialize in large-scale commercial, industrial, and residential projects, including high-rise structures, infrastructure development, and specialized, sustainable building solutions. We manage projects from planning and design through to final handover.",
    },
    {
      question: "Are your construction materials certified?",
      answer:
        "All materials used, including our specialized auto-bricks and cement products, meet relevant national and international standards (e.g., ASTM, ISO, BDS) and undergo internal material strength and durability testing.",
    },
    {
      question: "What commodities does your trading division handle?",
      answer:
        "Excellency General Trading specializes in both sourcing and distribution of essential commodities, including raw materials for industrial use, agricultural products, and specialized equipment.",
    },
    {
      question: "How does the Mahbub Group ensure ethical recruitment?",
      answer:
        "Through RM Orient Overseas, we adhere strictly to international labor laws and ethical recruitment guidelines. We focus on transparency, fair wages, and worker well-being, ensuring a safe and beneficial employment opportunity for all placed personnel.",
    },
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-500 mb-3">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Welcome to the Mahbub Group FAQ center. We have compiled answers to
            common questions regarding our structure, business operations, and
            commitment to quality across our diverse portfolio.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors cursor-pointer"
              >
                <span className="text-gray-800 font-semibold text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-700 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Link */}
        {/* <div className="text-left">
          <a
            href="#"
            className="text-sky-500 font-semibold hover:text-sky-600 transition-colors inline-flex items-center"
          >
            Read More
          </a>
        </div> */}
      </div>
    </div>
  );
}
