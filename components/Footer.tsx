"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/footer/footer-bg.png')" }}
      />

      <div className="relative max-w-[1830px] mx-auto px-1 sm:px-2 lg:px-20 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-center">
          {/* Company Info Section */}
          <div className="lg:col-span-1 flex flex-col space-y-4 h-full">
            <div className="flex items-center mb-12">
              <Image
                src="/logoo.png"
                alt="Company Logo"
                width={160}
                height={80}
                className="h-20 w-auto"
              />
            </div>

            <p className="text-white text-lg leading-relaxed -mt-10">
              Mahbub Group of Companies is a United Arab Emirates based Multiple
              Business Company established in the year 1993 to provide quality
              personnel
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2 pt-2">
              <Link
                href="https://www.youtube.com/@arcoengineeringltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-sky-500" />
              </Link>
              {/* <Link
                href="https://www.linkedin.com/company/arco-engineering-company-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-sky-500" />
              </Link> */}
              <Link
                href="https://x.com/arcocompanyltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-6 h-6 text-sky-500" />
              </Link>
              <Link
                href="https://www.instagram.com/arcoengineeringltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8  rounded flex items-center justify-center  transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-sky-500" />
              </Link>
              <Link
                href="https://www.facebook.com/arcoengineeringltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8  rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-sky-500" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 h-full flex flex-col ml-2 lg:ml-20">
            <h3 className="text-white text-2xl font-semibold mt-8 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 flex-grow">
              <li>
                <Link
                  href="/about-us"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3 h-full flex flex-col ml-2 lg:ml-10">
            <h3 className="text-white text-2xl font-semibold mt-8 mb-4">
              Resources
            </h3>
            <ul className="space-y-2 flex-grow">
              <li>
                <Link
                  href="/enquiry"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Enquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div className="space-y-3 h-full flex flex-col ml-2 lg:ml-6">
            <h3 className="text-white text-2xl font-semibold mt-8 mb-4">
              Divisions
            </h3>
            <ul className="space-y-2 flex-grow">
              <li>
                <Link
                  href="/divisions"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Garments
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  General Trading
                </Link>
              </li>
              <li>
                <Link
                  href="/divisions"
                  className="flex items-center gap-2 text-white text-lg hover:text-sky-300 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  Manpower Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3 h-full flex flex-col ml-2">
            <h3 className="text-white text-2xl font-semibold mt-8 mb-2">
              Contact Us
            </h3>
            <div className="space-y-3 flex-grow">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <div className="text-white text-md leading-relaxed">
                  <p>Lucky Roundabout</p>
                  <p>Industrial Area-1, Ajman</p>
                  <p>United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <Link
                  href="tel:+97154342750"
                  className="text-white text-lg hover:text-sky-300 transition-colors"
                >
                  +971 54 342 7550
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <Link
                  href="mailto:info@mahbubgroupuae.com"
                  className="text-white text-lg hover:text-sky-300 transition-colors"
                >
                  info@mahbubgroupuae.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative mt-4 pb-6">
        <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-sky-500/40 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ChevronRight className="w-4 h-4 text-white rotate-[-90deg]" />
            </button>

            {/* Copyright Text */}
            <p className="text-center text-white text-xl">
              © All rights reserved by Mahbub Group | Developed by{" "}
              <span className="font-semibold">
                <Link href="https://rapidsmarterp.com/">RAPID</Link>
              </span>
            </p>

            {/* Empty space for balance */}
            <div className="w-10 h-10"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
