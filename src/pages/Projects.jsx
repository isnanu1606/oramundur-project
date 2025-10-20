import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "TopUp Game Portal",
      desc: "Situs top-up game otomatis dengan API tercepat, antarmuka ramah pengguna, dan sistem pembayaran aman. Dirancang untuk gamer Indonesia yang ingin transaksi instan tanpa ribet.",
      link: "https://topup.oramundur.id",
      image: "https://source.unsplash.com/900x500/?gaming,cyber",
    },
    {
      title: "Smart School System",
      desc: "Ekosistem digital sekolah yang mencakup Absensi QR, e-Library, LMS, dan AI Asisten Guru. Dibangun dengan CodeIgniter 4 & Android Kotlin untuk menghadirkan pengalaman belajar masa depan.",
      link: "https://smartschool.oramundur.id",
      image: "https://source.unsplash.com/900x500/?education,technology",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f5f5f5] py-20">
      <motion.h1
        className="text-center text-4xl font-bold text-[#1B1F3B] mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Proyek Inovatif OraMundur Project
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>

      <p className="text-center mt-16 text-gray-600 max-w-xl mx-auto leading-relaxed">
        Semua proyek OraMundur Project dikembangkan dengan semangat inovasi berkelanjutan.  
        Kami fokus pada efisiensi, kemanusiaan, dan dampak nyata bagi dunia digital Indonesia. 🇮🇩
      </p>
    </section>
  );
}
