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

export default function About() {

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
        about us
      </motion.h1>

      
    </motion.div>
  );
}
