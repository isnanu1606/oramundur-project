import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/oramundur-techarrow.svg";

export default function About() {
  return (
    <section className="bg-[#f5f5f5] min-h-screen py-20 px-8 flex flex-col items-center text-center">
      {/* Logo dan Judul */}
      <motion.img
        src={logo}
        alt="OraMundur Project Logo"
        className="h-20 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl font-bold text-[#1B1F3B] mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Tentang OraMundur Project
      </motion.h1>

      <motion.p
        className="text-gray-600 max-w-3xl leading-relaxed mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        OraMundur Project adalah inisiatif digital yang berfokus pada inovasi teknologi berbasis pendidikan, 
        kreativitas, dan pemberdayaan masyarakat.  
        Kami percaya bahwa teknologi bukan hanya tentang mesin, tetapi tentang **manusia yang terus maju**.
      </motion.p>

      {/* Nilai & Filosofi */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#1B1F3B] mb-2">💡 Build</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kami membangun solusi digital dari nol dengan dedikasi dan semangat belajar. 
            Setiap baris kode adalah karya yang membawa perubahan.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#1B1F3B] mb-2">⚙️ Adapt</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Dunia berubah cepat, dan kami siap beradaptasi.  
            Inovasi kami fleksibel, efisien, dan terus berkembang bersama kebutuhan zaman.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#1B1F3B] mb-2">🚀 Never Retreat</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kami tidak mundur — bahkan di tengah tantangan.  
            Semangat “Ora Mundur” berarti terus maju menuju masa depan digital Indonesia.
          </p>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        className="mt-16 text-gray-500 text-sm max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p>
          Didirikan oleh tim pendidik, pengembang, dan kreator yang percaya bahwa
          teknologi dapat membuat pendidikan dan hiburan lebih bermakna.
        </p>
        <p className="mt-2">
          <b>OraMundur Project</b> — Made with ❤️ in Indonesia 🇮🇩
        </p>
      </motion.div>
    </section>
  );
}
