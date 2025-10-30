"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import Header from "./Header";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      date: "September 17th, 2025",
      author: "arcouser",
      title:
        "Labour Law Compliance in UAE: What Employers Need to Know Before Hiring",
      excerpt:
        "Hiring the right talent in the UAE is more than just filling positions; it involves adhering to strict labour law compliance and staffing regulations. Understanding the UAE labour law ensures that employers operate legally while protecting the rights of employees. Here's what you need to know before hiring. 1. Understanding",
      image: "/blogs/blog-1.png",
      slug: "labour-law-compliance-uae",
    },
    {
      id: 2,
      date: "September 10th, 2025",
      author: "arcouser",
      title: "How to Choose the Right Oil & Gas Manpower Supplier in the UAE",
      excerpt:
        "Finding the right workforce can make or break your oil and gas project in the UAE. From ensuring safety to meeting tight deadlines, a reliable manpower supplier is key. Here's a step-by-step guide to help you choose the best staffing solutions UAE. 1. Start With a Clear Understanding of Your",
      image: "/blogs/blog-2.png",
      slug: "oil-gas-manpower-supplier-uae",
    },
    {
      id: 3,
      date: "September 2nd, 2025",
      author: "arcouser",
      title:
        "Why Hiring Skilled Labour in Dubai is Crucial for Your Construction Project",
      excerpt:
        "Smooth Manpower, a leading provider of manpower supply UAE, understands the critical role of skilled labour Dubai in ensuring successful construction projects. Whether you are developing residential, commercial, or industrial structures, having the right workforce can make all the difference. Here are the top five benefits of hiring skilled labour",
      image: "/blogs/blog-3.png",
      slug: "skilled-labour-dubai-construction",
    },
    {
      id: 4,
      date: "July 24th, 2025",
      author: "arcouser",
      title:
        "Leveraging Manpower Supply Services for Effective Project Management in UAE",
      excerpt:
        "Effective project management is crucial for the success of any business venture, especially in the rapidly evolving and competitive market of the UAE. One key strategy that has proven beneficial for companies across various industries is leveraging manpower supply services. These services provide businesses with a flexible, skilled, and efficient",
      image: "/blogs/blog-4.png",
      slug: "manpower-supply-project-management",
    },
    {
      id: 5,
      date: "July 20th, 2025",
      author: "arcouser",
      title:
        "Exploring Manpower Supply Trends in UAE: Insights for Businesses Looking to Expand",
      excerpt:
        "The United Arab Emirates (UAE) continues to be a global hub for business and innovation, attracting companies from various industries seeking growth opportunities in the dynamic Middle Eastern market. As businesses embark on expansion journeys, understanding the latest manpower supply trends in the UAE is essential for effective workforce planning",
      image: "/blogs/blog-5.png",
      slug: "manpower-supply-trends-uae",
    },
    {
      id: 6,
      date: "July 12th, 2025",
      author: "arcouser",
      title: "The Importance of Skilled Labour Supply in the UAE",
      excerpt:
        "The United Arab Emirates (UAE) is renowned for its rapid economic growth and development, driven by a diverse range of industries including construction, hospitality, healthcare, and technology. Central to the success of these industries is the availability of skilled labour. The supply of skilled labour is crucial for maintaining the",
      image: "/blogs/blog-6.png",
      slug: "skilled-labour-supply-importance",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Header />
      <div className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          {/* Blog Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.16)] p-4 sm:p-5 flex flex-col gap-2 hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.12)] transition-shadow"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Post Content */}
                <div className="flex flex-col gap-3">
                  {/* Date and Share Row */}
                  <div className="flex justify-between items-center flex-wrap gap-3">
                    {/* Date */}
                    <time className="text-sm text-sky-500 leading-relaxed">
                      {post.date}
                    </time>

                    {/* Share Section */}
                    <div className="flex items-center gap-2">
                      {/* Share Text & Icon */}
                      <div className="flex items-center gap-1">
                        <Share2 className="w-5 h-5 text-sky-500" />
                        <span className="text-base font-medium text-sky-500 leading-none">
                          Share
                        </span>
                      </div>

                      {/* Social Buttons */}
                      <div className="flex items-center gap-2">
                        <motion.button
                          className="w-7 h-7 bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.16)] flex items-center justify-center group"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#0ea5e9",
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5 text-sky-500 group-hover:text-white transition-colors duration-200" />
                        </motion.button>

                        <motion.button
                          className="w-7 h-7 bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.16)] flex items-center justify-center group"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#0ea5e9",
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-3.5 h-3.5 text-sky-500 group-hover:text-white transition-colors duration-200" />
                        </motion.button>

                        <motion.button
                          className="w-7 h-7 bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.16)] flex items-center justify-center group"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#0ea5e9",
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5 text-sky-500 group-hover:text-white transition-colors duration-200" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <motion.h2
                    className="text-2xl sm:text-3xl text-zinc-800 leading-tight cursor-pointer"
                    whileHover={{
                      color: "#0ea5e9",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {post.title}
                  </motion.h2>

                  {/* Featured Image */}
                  <motion.div
                    className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Excerpt */}
                <div className="min-h-[80px] sm:min-h-[96px] py-2.5">
                  <p className="text-sm text-zinc-800 leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div
            className="flex justify-center items-center gap-2 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              className="px-4 py-2 rounded-lg bg-sky-500 text-white font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "#0284c7" }}
              whileTap={{ scale: 0.95 }}
            >
              1
            </motion.button>
            <motion.button
              className="px-4 py-2 rounded-lg border border-sky-500 text-sky-500 font-medium"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0ea5e9",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              2
            </motion.button>
            <motion.button
              className="px-4 py-2 rounded-lg border border-sky-500 text-sky-500 font-medium"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0ea5e9",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              3
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
