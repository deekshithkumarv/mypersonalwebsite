import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { BlogList } from "~/data/blogList.server";
import { blogList } from "~/data/blogList.server";
import { motion } from "framer-motion";
import { textVariants, containerVariants } from "~/data/animationConfig";

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

export default function Services() {
  const services = useLoaderData<BlogList[]>();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full max-w-[90%] p-6"
    >
      <motion.h1
        variants={textVariants}
        className="mb-20 text-3xl font-bold text-center leading-[1.3] md:text-4xl"
      >
        Our Photography Services
      </motion.h1>

      {/* Grid Layout for Service Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <motion.div
            key={service.slug}
            className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform"
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
          >
            {/* Flex layout for Image and Title */}
            <div className="flex items-center mb-4">
              {/* Replace with actual image URL */}
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-12 h-12 mr-4 rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                {service.title}
              </h2>
            </div>

            <p className="my-6 text-lg text-gray-600 dark:text-gray-300">
              {service.description}
            </p>

            <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
              <span className="font-sans font-bold uppercase">
                {service.publishDate}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
