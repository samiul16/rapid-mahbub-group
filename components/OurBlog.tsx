"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const OurBlog = () => {
  const featuredPost = {
    id: 1,
    title: " The Invisible Hand: How Smart Trading Fuels Global Growth",
    excerpt:
      "Did you know your morning coffee and your smartphone rely on a seamless, global trade choreography? Discover the precision logistics and ethical backbone that keep the world's supply chains moving efficiently.",
    image: "/bb.jpg",
    date: "26 Sep 2025",
    category: "Trading",
    slug: "essential-tools-trading-home",
  };

  const sidebarPosts = [
    {
      id: 2,
      title:
        "Why the Future of Property Lies in Smart, Sustainable Infrastructure?",
      excerpt:
        "The future isn't just being dreamed up—it's being built, brick by ethical brick. Explore how the Mahbub Group is using advanced, eco-friendly technology to construct modern infrastructure.",
      image: "/blogs/mahbub-blog-2.jpg",
      date: "September 26, 2024",
      slug: "exploring-art-construction-1",
    },
    {
      id: 3,
      title:
        "Beyond the Plate: The Art of Crafting a Memorable Dining Experience",
      excerpt:
        " What turns a meal into a memorable moment? It's more than just the food on your plate. Learn how Excellency Restaurants blends culinary creativity, culture, and care to set a new standard for hospitality.",
      image: "/blogs/mahbub-blog-3.jpg",
      date: "September 26, 2024",
      slug: "exploring-art-construction-2",
    },
    {
      id: 4,
      title: "Bridging Talent Gaps: Ethical Recruitment in a Borderless World",
      excerpt:
        "Your next career opportunity might be waiting thousands of miles away—if you have the right partner.  Discover how RM Orient is pioneering ethical, transparent, and people-centered global talent placement.",
      image: "/bc.jpg",
      date: "September 26, 2024",
      slug: "exploring-art-construction-3",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-24">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sky-500 mb-4 text-shadow-lg">
            Our Blog
          </h2>
        </motion.div>

        {/* Blog Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post - Left Side */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            {/* Featured Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Date Badge */}
              <motion.div
                className="absolute bottom-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Calendar className="w-4 h-4" />
                {featuredPost.date} {featuredPost.category}
              </motion.div>
              {/* Share Button */}
              <motion.button
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4 text-sky-500" />
              </motion.button>
            </div>

            {/* Featured Content */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3
                className="text-xl md:text-2xl font-bold text-gray-800 mb-3 hover:text-sky-600 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {/* <Link href={`/blog/${featuredPost.slug}`}> */}
                {featuredPost.title}
                {/* </Link> */}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {featuredPost.excerpt}
              </motion.p>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 w-fit shadow"
                >
                  Read More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Sidebar Posts - Right Side */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {sidebarPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex h-full">
                  {/* Post Image */}
                  <div className="relative w-24 md:w-32 flex-shrink-0 overflow-hidden rounded-l-xl">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Post Content */}
                  <motion.div
                    className="flex-1 p-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <motion.h4
                      className="text-lg font-semibold text-gray-800 mb-2 hover:text-sky-600 transition-colors line-clamp-2"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {post.title}
                    </motion.h4>
                    <motion.p
                      className="text-gray-600 text-sm mb-2 line-clamp-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    >
                      {post.excerpt}
                    </motion.p>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-300 w-fit shadow"
                      >
                        Read More
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
