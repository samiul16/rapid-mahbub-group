"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    description: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
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
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#051C36] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-18 items-stretch min-h-[600px]">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl h-full flex items-center">
              <div className="rounded-2xl p-2 shadow-2xl w-full">
                <Image
                  src="/get.png"
                  alt="Professional team working together"
                  width={500}
                  height={400}
                  className="w-full h-[600px] rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex items-stretch justify-center">
            <div className="w-full max-w-xl flex">
              <div className="bg-[#0a2540] backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-600/30 flex-1 flex flex-col w-full">
                <h2 className="text-white text-3xl lg:text-4xl font-bold mb-3">
                  Get In Touch
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

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="flex-1 space-y-6">
                    {/* Name Input - Floating Label */}
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("fullName")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-transparent rounded-lg border border-slate-500 text-white text-base font-normal  focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label
                        className={`absolute left-3 top-0 bg-[#0a2540] px-2 transition-all duration-200 pointer-events-none  ${
                          formData.fullName || focusedField === "fullName"
                            ? "-translate-y-1/2 text-xs text-sky-400"
                            : "translate-y-3 text-base text-slate-300"
                        }`}
                      >
                        Name
                      </label>
                    </div>

                    {/* Phone Input - Floating Label */}
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-transparent rounded-lg border border-slate-500 text-white text-base font-normal  focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label
                        className={`absolute left-3 top-0 bg-[#0a2540] px-2 transition-all duration-200 pointer-events-none  ${
                          formData.phone || focusedField === "phone"
                            ? "-translate-y-1/2 text-xs text-sky-400"
                            : "translate-y-3 text-base text-slate-300"
                        }`}
                      >
                        Phone
                      </label>
                    </div>

                    {/* Email Input - Floating Label */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-transparent rounded-lg border border-slate-500 text-white text-base font-normal  focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label
                        className={`absolute left-3 top-0 bg-[#0a2540] px-2 transition-all duration-200 pointer-events-none  ${
                          formData.email || focusedField === "email"
                            ? "-translate-y-1/2 text-xs text-sky-400"
                            : "translate-y-3 text-base text-slate-300"
                        }`}
                      >
                        Email
                      </label>
                    </div>

                    {/* Description Input - Floating Label */}
                    <div className="relative">
                      <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("description")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-transparent rounded-lg border border-slate-500 text-white text-base font-normal  focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <label
                        className={`absolute left-3 top-0 bg-[#0a2540] px-2 transition-all duration-200 pointer-events-none  ${
                          formData.description || focusedField === "description"
                            ? "-translate-y-1/2 text-xs text-sky-400"
                            : "translate-y-3 text-base text-slate-300"
                        }`}
                      >
                        Description
                      </label>
                    </div>

                    {/* Message Textarea - Floating Label */}
                    <div className="relative flex-1">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        disabled={isSubmitting}
                        className="w-full h-full min-h-[120px] px-4 py-3 bg-transparent rounded-lg border border-slate-500 text-white text-base font-normal  focus:outline-none transition-all resize-none peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:border-sky-500"
                      />
                      <label
                        className={`absolute left-3 top-0 bg-[#0a2540] px-2 transition-all duration-200 pointer-events-none  ${
                          formData.message || focusedField === "message"
                            ? "-translate-y-1/2 text-xs text-sky-400"
                            : "translate-y-3 text-base text-slate-300"
                        }`}
                      >
                        Message
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full px-8 py-3 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 rounded-full text-white text-xl font-bold  uppercase tracking-wide transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed shadow-lg cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          SENDING...
                        </>
                      ) : (
                        <>
                          SUBMIT
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
