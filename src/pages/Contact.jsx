import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesanmu telah dikirim ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center py-20 px-6">
      <motion.h1
        className="text-4xl font-bold text-[#1B1F3B] mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hubungi Kami
      </motion.h1>

      <motion.p
        className="text-gray-600 text-center max-w-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Kami senang mendengar ide, pertanyaan, dan peluang kolaborasi darimu.  
        Silakan isi form di bawah atau hubungi kami langsung melalui WhatsApp / Email.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-sm border border-gray-200 rounded-xl p-8 w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="mb-4">
          <label className="block text-left text-sm font-semibold text-[#1B1F3B] mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Masukkan nama kamu"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-sm font-semibold text-[#1B1F3B] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="contoh@email.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-left text-sm font-semibold text-[#1B1F3B] mb-2">
            Pesan
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Tulis pesan kamu..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1B1F3B] text-white font-semibold py-2 rounded-md hover:bg-[#FF7B00] transition-colors duration-300"
        >
          Kirim Pesan
        </button>
      </motion.form>

      {/* Contact Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="https://wa.me/6288976629524"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-md font-semibold hover:bg-[#1ea556] transition"
        >
          <MessageSquare size={18} /> WhatsApp
        </a>

        <a
          href="mailto:contact@oramundur.id"
          className="flex items-center gap-2 bg-[#1B1F3B] text-white px-5 py-3 rounded-md font-semibold hover:bg-[#FF7B00] transition"
        >
          <Mail size={18} /> Email Kami
        </a>

        <a
          href="tel:+6288976629524"
          className="flex items-center gap-2 bg-gray-300 text-[#1B1F3B] px-5 py-3 rounded-md font-semibold hover:bg-[#FF7B00] hover:text-white transition"
        >
          <Phone size={18} /> Telepon
        </a>
      </motion.div>
    </section>
  );
}
