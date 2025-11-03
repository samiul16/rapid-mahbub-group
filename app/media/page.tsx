"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Play, ZoomIn } from "lucide-react";
import Header from "./Header";
import OurClients from "@/components/OurClients";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  size: "small" | "medium" | "large";
}

const OurMedia = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "image",
      src: "/media/media-1.jpg",
      alt: "Gallery Image 1",
      size: "medium",
    },
    {
      id: 2,
      type: "image",
      src: "/media/2.jpg",
      alt: "Gallery Image 2",
      size: "medium",
    },
    {
      id: 3,
      type: "image",
      src: "/media/3.png",
      alt: "Gallery Image 3",
      size: "small",
    },
    {
      id: 4,
      type: "video",
      src: "https://www.youtube.com/watch?v=Do0VwUcZcxc",
      thumbnail: "/media/4.png",
      alt: "Company Video",
      size: "large",
    },
    {
      id: 5,
      type: "image",
      src: "/media/5.png",
      alt: "Gallery Image 4",
      size: "large",
    },
    {
      id: 6,
      type: "image",
      src: "/media/media-6.jpg",
      alt: "Gallery Image 5",
      size: "small",
    },
  ];

  const handleMediaClick = (item: MediaItem) => {
    setSelectedMedia(item);
    setIsPlaying(item.type === "video");
  };

  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  };

  const handleClose = () => {
    setSelectedMedia(null);
    setIsPlaying(false);
  };

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Header />
      <div className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center gap-4 mb-14"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-sky-500 leading-10">
              Our Media
            </h1>
            <p className="text-base text-slate-900/80 leading-snug text-center">
              Explore our visual journey through images and videos
            </p>
          </motion.div>

          {/* Media Grid */}
          <motion.div
            className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Row 1: Two medium images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaItems.slice(0, 2).map((item) => (
                <motion.div
                  key={item.id}
                  className="relative h-64 sm:h-80 md:h-96 rounded-[20px] overflow-hidden cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleMediaClick(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ZoomIn className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: Small image + Large video */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Small Image */}
              <motion.div
                className="md:col-span-4 relative h-64 sm:h-80 md:h-96 rounded-[20px] overflow-hidden cursor-pointer group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleMediaClick(mediaItems[2])}
              >
                <Image
                  src={mediaItems[2].src}
                  alt={mediaItems[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Large Video */}
              <motion.div
                className="md:col-span-8 relative h-64 sm:h-80 md:h-96 rounded-[20px] overflow-hidden cursor-pointer group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleMediaClick(mediaItems[3])}
              >
                <Image
                  src={mediaItems[3].thumbnail || mediaItems[3].src}
                  alt={mediaItems[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 bg-sky-500/30 backdrop-blur-[20px] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Large image + Small image */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large Image */}
              <motion.div
                className="md:col-span-8 relative h-64 sm:h-80 md:h-96 rounded-[20px] overflow-hidden cursor-pointer group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleMediaClick(mediaItems[4])}
              >
                <Image
                  src={mediaItems[4].src}
                  alt={mediaItems[4].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Small Image */}
              <motion.div
                className="md:col-span-4 relative h-64 sm:h-80 md:h-96 rounded-[20px] overflow-hidden cursor-pointer group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleMediaClick(mediaItems[5])}
              >
                <Image
                  src={mediaItems[5].src}
                  alt={mediaItems[5].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <>
              {/* Modal Background */}
              <motion.div
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
              >
                {/* Content */}
                <motion.div
                  className="relative max-w-7xl w-full max-h-[90vh]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button - Positioned relative to content */}
                  <motion.button
                    className="absolute -top-5 right-[3px] z-10 w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors shadow-2xl cursor-pointer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClose}
                  >
                    <X
                      className="w-6 h-6 text-white font-bold"
                      strokeWidth={3}
                    />
                  </motion.button>

                  {selectedMedia.type === "image" ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={selectedMedia.src}
                        alt={selectedMedia.alt}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        src={getYouTubeEmbedUrl(selectedMedia.src)}
                        title={selectedMedia.alt}
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <OurClients />
    </>
  );
};

export default OurMedia;
