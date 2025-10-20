import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, link, image }) {
  return (
    <motion.div
      className="bg-white dark:bg-[#2b2e4a] border border-gray-200 dark:border-gray-600 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 w-80"
      whileHover={{ scale: 1.03, rotate: 0.5 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        src={image}
        alt={title}
        className="rounded-t-xl h-48 w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold text-navy dark:text-white">{title}</h3>
        <p className="text-graytext dark:text-gray-300 mt-2 text-sm leading-relaxed">
          {desc}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-orange font-semibold hover:underline"
        >
          Lihat Selengkapnya →
        </a>
      </div>
    </motion.div>
  );
}
