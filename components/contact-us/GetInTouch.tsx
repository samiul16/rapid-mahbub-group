"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    description: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        toast.success("Message sent successfully!");
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
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+971543247559",
      link: "tel:+971543247559",
    },
    {
      icon: Mail,
      title: "Email",
      content: "marium.marufa@gmail.com",
      link: "mailto:marium.marufa@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content:
        "Ajman Industrial Area 1, Ajman Industrial 1, United Arab Emirates, 0000",
      link: "https://maps.google.com/?q=Ajman+Industrial+Area+1+United+Arab+Emirates",
    },
  ];

  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
                }}
                className="bg-white rounded-[20px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 lg:p-8 flex-1 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-sky-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-sky-500">
                    {info.title}
                  </h3>
                </div>
                <a
                  href={info.link}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={
                    info.title === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-lg lg:text-xl font-bold text-black/60 hover:text-sky-500 transition-colors leading-relaxed block"
                >
                  {info.content}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.16)] p-6 lg:p-12 flex flex-col h-full"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-sky-500 mb-8">
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
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
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

            <form
              onSubmit={handleSubmit}
              className="space-y-5 flex-1 flex flex-col"
            >
              <div className="flex-1 space-y-5">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base font-normal focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <label
                    className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                      formData.fullName || focusedField === "fullName"
                        ? "-translate-y-1/2 text-xs text-sky-500"
                        : "translate-y-3 text-base text-gray-500"
                    }`}
                  >
                    Full Name *
                  </label>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base font-normal focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <label
                    className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                      formData.phone || focusedField === "phone"
                        ? "-translate-y-1/2 text-xs text-sky-500"
                        : "translate-y-3 text-base text-gray-500"
                    }`}
                  >
                    Phone *
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base font-normal focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <label
                    className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                      formData.email || focusedField === "email"
                        ? "-translate-y-1/2 text-xs text-sky-500"
                        : "translate-y-3 text-base text-gray-500"
                    }`}
                  >
                    Email *
                  </label>
                </div>

                {/* Description Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("description")}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base font-normal focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <label
                    className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                      formData.description || focusedField === "description"
                        ? "-translate-y-1/2 text-xs text-sky-500"
                        : "translate-y-3 text-base text-gray-500"
                    }`}
                  >
                    Description *
                  </label>
                </div>

                {/* Message Textarea */}
                <div className="relative flex-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    disabled={isSubmitting}
                    className="w-full h-full min-h-[112px] px-4 py-3 bg-white rounded-lg border border-gray-300 text-gray-900 text-base font-normal focus:outline-none focus:border-sky-500 transition-all peer placeholder-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <label
                    className={`absolute left-3 top-0 bg-white px-1 transition-all duration-200 pointer-events-none ${
                      formData.message || focusedField === "message"
                        ? "-translate-y-1/2 text-xs text-sky-500"
                        : "translate-y-3 text-base text-gray-500"
                    }`}
                  >
                    Message *
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="px-8 py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 rounded-[30px] text-white text-xl font-bold uppercase tracking-wide transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  <>
                    SUBMIT
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
