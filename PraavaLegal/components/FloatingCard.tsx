"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FloatingCardProps {
  color: "blue" | "orange" | "dark" | "dark-solid";
  rotation: number;
  icon: React.ReactNode;
  label: string;
  className?: string;
  animationDelay?: number;
  index?: number;
}

const colorStyles: Record<FloatingCardProps["color"], string> = {
  blue:
    "bg-[var(--hero-blue)] text-white shadow-[0_6px_20px_rgba(37,99,235,0.35)]",
  orange:
    "bg-[var(--hero-orange)] text-white shadow-[0_6px_20px_rgba(234,88,12,0.35)]",
  dark: "bg-[var(--hero-navy-card)] text-[var(--hero-orange-accent)] shadow-[0_6px_20px_rgba(30,27,75,0.4)]",
  "dark-solid":
    "bg-gray-900 text-white shadow-[0_6px_20px_rgba(17,24,39,0.4)] dark:bg-gray-950",
};

export default function FloatingCard({
  color,
  rotation,
  icon,
  label,
  className,
  animationDelay = 0,
  index = 0,
}: FloatingCardProps) {
  const isAccentDark = color === "dark";

  return (
    <motion.div
      className={cn(
        "absolute z-20 hidden min-h-[3.5rem] cursor-pointer items-center gap-3.5 rounded-full px-6 py-3.5 shadow-md transition-shadow md:flex",
        colorStyles[color],
        className
      )}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.2 + index * 0.1 },
        scale: { duration: 0.5, delay: 0.2 + index * 0.1 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: animationDelay,
        },
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        y: -4,
        zIndex: 50,
        boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      whileTap={{ scale: 1.02 }}
    >
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center",
          isAccentDark &&
            "[&_svg]:text-[var(--hero-orange-accent)] [&_svg]:stroke-[var(--hero-orange-accent)]",
          (color === "blue" || color === "orange" || color === "dark-solid") &&
            "[&_svg]:text-white [&_svg]:stroke-white"
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          "whitespace-nowrap text-[15px] font-bold tracking-tight",
          isAccentDark && "text-[var(--hero-orange-accent)]"
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}
