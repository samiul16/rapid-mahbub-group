"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    description: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
          {
            duration: 5000,
            style: {
              background: "#10b981",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#10b981",
            },
          }
        );
        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          description: "",
          message: "",
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        toast.error(data.error || "Failed to send message. Please try again.", {
          duration: 4000,
          style: {
            background: "#ef4444",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#ef4444",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.", {
        duration: 4000,
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#ef4444",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#051C36] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <div className="rounded-2xl p-2 shadow-2xl">
                <Image
                  src="/get.png"
                  alt="Professional team working together"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl">
              <div className="bg-neutral-50/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-600/30">
                <h2 className="text-white text-3xl lg:text-4xl font-bold mb-3">
                  Input Your Details
                </h2>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className={`mb-5 p-4 rounded-lg flex items-start gap-3 ${
                        submitStatus.type === "success"
                          ? "bg-green-500/20 text-green-100 border border-green-400/30"
                          : "bg-red-500/20 text-red-100 border border-red-400/30"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm font-medium leading-relaxed">
                        {submitStatus.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  {/* Service Description */}
                  <div>
                    <input
                      type="text"
                      name="description"
                      placeholder="Service Description"
                      value={formData.description}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 uppercase tracking-wider text-lg shadow hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
