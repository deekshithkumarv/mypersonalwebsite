import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";

import Engagement from '../../public/assets/images/enagagement.jpeg';
import Wedding from '../../public/assets/images/wedding1.jpg';
import Haldi from '../../public/assets/images/haldi.jpg';
import Reception from '../../public/assets/images/reception.jpeg';
import PreWedding from '../../public/assets/images/wedding2.jpg';

export default function Gallery() {
  const images = [
    { src: Wedding, alt: "Wedding" },
    { src: Engagement, alt: "Engagement" },
    { src: PreWedding, alt: "Image 3" },
    { src: Haldi, alt: "Haldi" },
    { src: Reception, alt: "Reception" },
    { src: PreWedding, alt: "PreWedding" },
    { src: Wedding, alt: "Image 7" },
    { src: PreWedding, alt: "Image 8" },
    { src: Reception, alt: "Reception" }
  ];

  const getRandomHeight = () => {
    const heights = ["300px", "300px", "300px"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-cover bg-center transition duration-1000 ease-in-out">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto my-0 w-full max-w-[90%] p-6"
      >
        <motion.h1
          variants={textVariants}
          className="mb-10 text-3xl font-bold leading-[1.3] md:text-4xl"
        >
          Capturing emotions
        </motion.h1>

        {/* Grid Layout for Service Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              style={{
                width: "100%", // Set to 100% of the grid column width
                height: getRandomHeight(), // Random height for variation
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
