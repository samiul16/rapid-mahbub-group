"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How Long Does a Construction Project Take?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      question: "What sets ARCO Construction apart in design?",
      answer:
        "We provide end-to-end IT solutions including software development, maintenance services, manpower supply, and technology consulting to help businesses optimize their operations and achieve their goals.",
    },
    {
      question: "What is the typical budget for a construction project?",
      answer:
        "Manpower supply is the service of providing skilled IT professionals and technical resources to organizations on a temporary or permanent basis to meet their staffing requirements and project needs.",
    },
    {
      question: "Does ARCO prioritize sustainability?",
      answer:
        "Outsourcing allows companies to access specialized expertise, reduce operational costs, focus on core business activities, scale resources flexibly, and accelerate project delivery timelines.",
    },
    {
      question: "What construction software do you prefer?",
      answer:
        "Temping (temporary staffing) is the practice of hiring skilled professionals for short-term assignments or project-based work, providing flexibility for both employers and workers.",
    },
  ];

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-500 mb-3">
            FAQ&apos;S
          </h1>
          <div className="w-16 h-1 bg-sky-500 mx-auto"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
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
