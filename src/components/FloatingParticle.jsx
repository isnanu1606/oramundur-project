import { motion } from "framer-motion";

export default function FloatingParticle() {
  const particles = new Array(20).fill(0);
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-400/30 rounded-full"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
