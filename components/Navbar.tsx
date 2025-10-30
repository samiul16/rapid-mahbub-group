"use client";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key and outside click
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (event.key === "Escape" && isLangDropdownOpen) {
        setIsLangDropdownOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        isLangDropdownOpen &&
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    if (isLangDropdownOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isLangDropdownOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Determine navbar background and text colors
  const getNavbarStyles = () => {
    if (isHomePage) {
      return {
        navBg: isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent",
        textColor: "text-white",
        hoverColor: "hover:text-[#1a7ba8]",
        activeColor: "text-sky-600 font-semibold",
      };
    } else {
      return {
        navBg: isScrolled ? "bg-white shadow-md" : "bg-white shadow-md",
        textColor: isScrolled ? "text-blue-400" : "text-blue-400 ",
        hoverColor: isScrolled ? "hover:text-sky-00" : "hover:text-sky-600",
        activeColor: isScrolled
          ? "text-sky-600 font-semibold"
          : "text-sky-600 font-semibold",
      };
    }
  };

  const styles = getNavbarStyles();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 py-3 ${styles.navBg} hover:bg-white group`}
      style={{ zIndex: 9998 }}
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 2xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logoo.png"
                alt="Company Logo"
                width={160}
                height={60}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex gap-6 lg:gap-10">
              <Link
                href="/divisions"
                className={`${
                  pathname === "/divisions"
                    ? styles.activeColor
                    : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-medium transition-colors text-lg font-anek`}
              >
                Divisions
              </Link>
              <Link
                href="/about-us"
                className={`${
                  pathname === "/about-us"
                    ? styles.activeColor
                    : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-medium transition-colors text-lg font-anek`}
              >
                About
              </Link>
              <Link
                href="/media"
                className={`${
                  pathname === "/media" ? styles.activeColor : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-medium transition-colors text-lg font-anek`}
              >
                Media
              </Link>
              <Link
                href="/career"
                className={`${
                  pathname === "/career" ? styles.activeColor : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-medium transition-colors text-lg font-anek`}
              >
                Career
              </Link>
              <Link
                href="/contact-us"
                className={`${
                  pathname === "/contact-us"
                    ? styles.activeColor
                    : styles.textColor
                } ${
                  styles.hoverColor
                } group-hover:text-sky-500 font-medium transition-colors text-lg font-anek`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector with Flag */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 rounded-full px-3 py-2 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Image
                  src="https://flagcdn.com/w40/us.png"
                  alt="English"
                  width={24}
                  height={16}
                  className="rounded-sm"
                />
                <ChevronDown
                  className={`${
                    styles.textColor
                  } group-hover:text-sky-500 w-5 h-5 transition-transform ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language Dropdown */}
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => {
                      setIsLangDropdownOpen(false);
                      // Handle language change to English
                    }}
                    className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 transition-colors text-left cursor-pointer"
                  >
                    <Image
                      src="https://flagcdn.com/w40/us.png"
                      alt="English"
                      width={24}
                      height={16}
                      className="rounded-sm"
                    />
                    <span className="text-gray-800 text-sm font-medium">
                      English
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setIsLangDropdownOpen(false);
                      // Handle language change to Arabic
                    }}
                    className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 transition-colors text-left cursor-pointer"
                  >
                    <Image
                      src="https://flagcdn.com/w40/sa.png"
                      alt="Arabic"
                      width={24}
                      height={16}
                      className="rounded-sm"
                    />
                    <span className="text-gray-800 text-sm font-medium">
                      العربية
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button
              className={`w-10 h-10 ${styles.textColor} group-hover:text-sky-500 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors cursor-pointer`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              href="/book-meeting"
              className={`w-44 h-10 px-5 py-3 ${
                isHomePage
                  ? "bg-sky-400 hover:bg-sky-500"
                  : "bg-sky-500 hover:bg-sky-600"
              } rounded-[30px] inline-flex justify-center items-center gap-2.5 transition-colors shadow`}
            >
              <span className="text-indigo-50 text-base font-medium">
                Book A Meeting
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative w-11 h-11 ${styles.textColor} group-hover:text-sky-500 hover:opacity-50 transition-colors flex items-center justify-center cursor-pointer`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            zIndex: 2147483646,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-black/65 backdrop-blur-lg border-l border-white/10 transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          zIndex: 2147483647,
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          isolation: "isolate",
        }}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 text-white hover:text-red-400 transition-colors flex items-center justify-center rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6">
            <Link
              href="/divisions"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/divisions" ? "text-sky-400" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Divisions
            </Link>
            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/about-us" ? "text-sky-400" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              About
            </Link>
            <Link
              href="/media"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/media" ? "text-sky-400" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Media
            </Link>
            <Link
              href="/career"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/career" ? "text-sky-400" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Career
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                pathname === "/contact-us" ? "text-sky-400" : "text-white/80"
              } hover:text-sky-500 font-semibold transition-colors text-xl py-2 font-anek`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Language Selector */}
          <div className="mt-8 mb-4">
            <div className="flex items-center space-x-3 px-3 py-2 bg-white/10 rounded-lg">
              <Image
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                width={24}
                height={16}
                className="rounded-sm"
              />
              <span className="text-white/90 text-base font-medium">
                English
              </span>
            </div>
          </div>

          {/* Mobile Search and Book Now */}
          <div className="space-y-4">
            {/* Mobile Search Button */}
            <button
              className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-white/90" />
              <span className="text-white/90 text-base font-medium">
                Search
              </span>
            </button>

            {/* Mobile Book Now Button */}
            <Link
              href="/book-meeting"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-44 h-10 px-5 py-3 bg-blue-400 rounded-[30px] inline-flex justify-center items-center gap-2.5 hover:bg-blue-500 transition-colors"
            >
              <span className="text-indigo-50 text-base font-medium">
                Book A Meeting
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
