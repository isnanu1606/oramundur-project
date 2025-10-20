import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/oramundur-techarrow.svg";

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
      <motion.img
        src={logo}
        alt="OraMundur Project"
        className="h-20 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        OraMundur Project
      </motion.h1>

      <motion.p
        className="text-gray-600 max-w-2xl mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        “Build, Adapt, and Never Retreat.”  
        Kami menciptakan solusi digital yang cerdas, cepat, dan berjiwa Indonesia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link
          to="/projects"
          className="bg-[#FF7B00] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e86f00] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Explore Projects →
        </Link>
      </motion.div>
    </section>
  );
}
