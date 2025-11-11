"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CompanySection {
  id: number;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image: string;
  imageAlt: string;
  link?: string;
}

const CompanySections = () => {
  const router = useRouter();

  const companies: CompanySection[] = [
    {
      id: 1,
      title: "Mahbub Group of Companies",
      description1:
        "The Mahbub Group of Companies operates across diverse and dynamic sectors, including manufacturing, global trading, refined hospitality, and vital workforce solutions. Every aspect of the Group’s operation strongly reflects its unified vision centered on excellence and unwavering commitment. From producing premium apparel to facilitating worldwide trade and logistics, each venture adheres strictly to high standards of quality and integrity. The Group strategically pursues growth by building meaningful partnerships founded on trust and transparency. This success is achieved by blending modern business practices with deep ethical values to lead in competitive industries.",
      description2:
        "Beyond business expansion, the Mahbub Group maintains an equal devotion to creating a positive social and economic impact. They champion fair employment opportunities and consistently support the adoption of sustainable business practices nationwide.",
      description3:
        "The Group actively contributes to community development initiatives, striving to empower individuals and uplift societies. This entire mission is guided by the firm belief that ultimate success is measured not just by profit, but by achieving a clear purpose. Ultimately, the Mahbub Group seeks to build a strong, lasting legacy of progress that will benefit future generations.",
      image: "/mahbub-about-1.jpg",
      imageAlt: "Mahbub Group of Companies",
    },
    {
      id: 2,
      title: "Alburaq Garments LLC",
      description1:
        "Alburaq Garments LLC stands as the flagship apparel venture of the Mahbub Group, symbolizing manufacturing excellence. The company successfully blends expert craftsmanship with advanced technology and creative innovation to produce garments reflecting both superior quality and timeless design. From concept to final product, every process is strictly guided by precision, consistency, and adherence to the highest international standards.",
      description2:
        "Alburaq’s facilities utilize state-of-the-art machinery run by a skilled workforce dedicated to efficiency, sustainability, and ethical practices. ",
      description3:
        "Driven by excellence, the company has secured enduring relationships with leading global fashion brands based on trust and reliable performance. Alburaq’s comprehensive approach provides complete apparel solutions, balancing style and comfort with clear social and environmental responsibility, continuously redefining industry standards.",
      image: "/mahbub-about-2.jpg",
      imageAlt: "Alburaq Garments LLC",
    },
    {
      id: 3,
      title: "Excellency General Trading LLC",
      description1:
        "Excellency General Trading LLC is pivotal to the Mahbub Group's global trade and supply network, serving as a vital link between markets and opportunities worldwide. The company specializes in sourcing, distribution, and comprehensive logistics, ensuring the reliable cross-border movement of essential commodities, consumer goods, and industrial materials. Built on efficiency and transparency, Excellency General Trading delivers value-driven solutions that strengthen business relationships and foster sustainable growth. ",
      description2:
        "By combining strong local expertise with a vast global network, the company not only connects buyers and suppliers but also actively helps businesses expand their reach and remain highly competitive. Through a commitment to innovation and integrity, Excellency General Trading is strategically shaping a future of shared success in international commerce.",
      description3:
        "Its expertise allows businesses to streamline their supply chains for maximum efficiency. They are focused on optimizing operations to meet the demands of an evolving global marketplace.",
      image: "/mahbub-about-3.jpg",
      imageAlt: "Excellency General Trading LLC",
    },
    {
      id: 4,
      title: "Excellency Restaurants",
      description1:
        "Excellency Restaurants embodies the Mahbub Group's commitment to excellence by elevating dining into an art form that connects people through exceptional culinary experiences. Each establishment harmoniously blends flavor, culture, and creativity, where authentic traditional recipes meet modern innovation. Every plate, from gourmet international cuisine to local favorites, is crafted with utmost care, precision, and authenticity. More than just a meal, Excellency focuses on hospitality; every detail—including ambiance, service, and presentation—is designed to evoke warmth, comfort, and connection.",
      description2:
        "With a strong commitment to using quality ingredients and practicing sustainable sourcing, paired with a customer-first philosophy, the brand continuously sets new standards in the culinary world. ",
      description3:
        "Their success is driven by a genuine care for guests and a dedication to inspiring lasting delight. Excellency is dedicated to creating memorable moments with every carefully curated service.",
      image: "/mahbub-about-4.png",
      imageAlt: "Excellency Restaurants",
    },
    {
      id: 5,
      title: "RM Orient Overseas Ltd",
      description1:
        "RM Orient Overseas Ltd is the Mahbub Group's trusted partner for global workforce solutions. The company specializes in connecting skilled professionals with reputable international employers, effectively bridging talent gaps to drive mutual success. Its core process is guided by integrity, transparency, and full compliance, ensuring ethical employment practices and fairness for all stakeholders. More than just recruitment, RM Orient invests in sustainable workforce development and empowerment, catalyzing positive change and long-term global achievement.",
      description2:
        "Beyond its core role in recruitment, RM Orient Overseas is seriously invested in shaping sustainable workforce development globally. This is achieved through continuous programs for skill enhancement, proactive worker welfare initiatives, and strategic partnerships. The company consistently helps in building stronger, more capable international teams that directly support business growth.",
      description3:
        "By prioritizing human dignity and empowerment, RM Orient is more than a mere manpower provider; it acts as a powerful catalyst for positive change. The company helps both individuals realize their full potential and global businesses achieve significant, long-term success.",
      image: "/mahbub-about-5.jpg",
      imageAlt: "RM Orient Overseas Ltd",
    },
  ];

  return (
    <div className="w-full bg-white">
      {companies.map((company, index) => (
        <div
          key={company.id}
          className={`py-12 md:py-16 lg:py-20 ${
            index !== companies.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-24">
            <div
              className={`flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className="w-full lg:w-[737px] h-[300px] sm:h-[400px] lg:h-[579px] relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-full h-full relative rounded-[20px] overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={company.image}
                    alt={company.imageAlt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-full lg:w-[837px] flex flex-col justify-start items-start gap-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Title */}
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-sky-500 tracking-wide text-shadow-md"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {company.title}
                </motion.h2>

                {/* Content Paragraphs */}
                <div className="flex flex-col gap-4">
                  <motion.p
                    className="text-justify text-black text-lg sm:text-base leading-7 sm:leading-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {company.description1}
                  </motion.p>

                  <motion.p
                    className="text-justify text-black text-lg sm:text-base leading-7 sm:leading-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {company.description2}
                  </motion.p>

                  <motion.p
                    className="text-justify text-black text-lg sm:text-base leading-7 sm:leading-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {company.description3}
                  </motion.p>

                  {/* Explore More Button */}
                  <motion.button
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-lg sm:text-xl font-semibold leading-8 group cursor-pointer mt-2 px-6 py-3 rounded-full transition-colors duration-300 w-fit shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      router.push("/about-us");
                    }}
                  >
                    <span>Explore more</span>
                    <motion.div
                      className="flex items-center justify-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanySections;
