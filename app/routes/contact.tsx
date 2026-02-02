import { motion } from "framer-motion";
import { textVariants, containerVariants } from "~/data/animationConfig";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-cover bg-center transition duration-1000 ease-in-out">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto my-0 w-full p-8 active:bg-gray-300 dark:bg-gray-700 dark:text-white bg-opacity-90 shadow-lg rounded-lg"
      >
        <motion.h1
          variants={textVariants}
          className="mb-8 text-3xl font-bold leading-[1.3] text-center text-black dark:text-white md:text-4xl"
        >
          Contact Us
        </motion.h1>

        <div className="space-y-6 text-black dark:text-white text-lg">
          <motion.div variants={textVariants} className="space-y-4">
            <h2 className="text-xl font-semibold text-black dark:text-white">We’d Love to Hear From You!</h2>
            <p className="leading-relaxed">
              Whether you're planning your wedding or simply have questions about our services, we're here to help make your big day unforgettable. Reach out to us with any inquiries or to discuss capturing the moments that matter most.
            </p>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div variants={textVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-black dark:text-white">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-pink-500" />
              <span className="text-black dark:text-white">+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-pink-500" />
              <span className="text-black dark:text-white">contact@weddingphotography.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-pink-500" />
              <span className="text-black dark:text-white">123 Wedding Street, Dream City, USA</span>
            </div>
          </motion.div>

          {/* Embedded Google Map */}
          <motion.div variants={textVariants} className="space-y-4 mt-6">
            <h3 className="text-xl font-semibold text-black dark:text-white">Our Location</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=40.748817,-73.985428&zoom=15`}
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={textVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Connect With Us</h3>
            <p className="text-gray-600 dark:text-white">Follow us on social media for the latest updates and photography inspiration.</p>
            <div className="flex space-x-6 text-pink-500 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
