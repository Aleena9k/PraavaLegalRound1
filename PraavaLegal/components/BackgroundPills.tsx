"use client";

import { motion } from "framer-motion";

const pills = [
  /* Left — top, middle, bottom */
  {
    className:
      "-left-[28%] top-[8%] h-14 w-[min(480px,72vw)] opacity-40 sm:-left-[22%]",
    delay: 0,
    duration: 9,
    x: [0, 24, 0],
  },
  {
    className:
      "-left-[18%] top-[36%] h-12 w-[min(380px,58vw)] opacity-35 sm:-left-[14%]",
    delay: 1.2,
    duration: 11,
    x: [0, -18, 0],
  },
  {
    className:
      "-left-[24%] bottom-[10%] h-16 w-[min(520px,75vw)] opacity-45 sm:-left-[20%]",
    delay: 2.4,
    duration: 10,
    x: [0, 20, 0],
  },
  /* Right — staggered cluster */
  {
    className:
      "-right-[12%] top-[18%] h-12 w-[min(300px,48vw)] opacity-35 sm:-right-[8%]",
    delay: 0.6,
    duration: 8,
    x: [0, -22, 0],
  },
  {
    className:
      "-right-[6%] top-[42%] h-14 w-[min(400px,62vw)] opacity-40 sm:-right-[4%]",
    delay: 1.8,
    duration: 12,
    x: [0, 16, 0],
  },
  {
    className:
      "-right-[20%] top-[62%] h-10 w-[min(260px,42vw)] opacity-30 sm:-right-[14%]",
    delay: 3,
    duration: 9,
    x: [0, -14, 0],
  },
];

export default function BackgroundPills() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {pills.map((pill, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-[var(--hero-pill)] dark:opacity-30 ${pill.className}`}
          animate={{
            x: pill.x,
            opacity: [0.28, 0.48, 0.28],
          }}
          transition={{
            duration: pill.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pill.delay,
          }}
        />
      ))}
    </div>
  );
}
