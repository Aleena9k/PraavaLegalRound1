"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PortalCardProps {
  rotation?: number;
  className?: string;
  animationDelay?: number;
  index?: number;
}

export default function PortalCard({
  rotation = -3,
  className,
  animationDelay = 1,
  index = 3,
}: PortalCardProps) {
  return (
    <motion.div
      className={cn(
        "absolute z-20 hidden max-w-[min(420px,calc(100vw-2.5rem))] cursor-pointer items-center gap-3 rounded-full bg-[var(--hero-portal)] py-3 pl-4 pr-6 shadow-[0_8px_24px_rgba(30,27,75,0.12)] transition-shadow md:flex",
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
        scale: 1.06,
        rotate: 0,
        y: -4,
        zIndex: 50,
        boxShadow: "0 16px 40px rgba(30,27,75,0.22)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      whileTap={{ scale: 1.02 }}
    >
      <div
        className="h-10 w-1 shrink-0 rounded-full bg-[var(--hero-orange)]"
        aria-hidden
      />

      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#e8e4f8] ring-2 ring-white/50">
        <Image
          src="/portal-avatar.svg"
          alt="John Doe"
          width={48}
          height={48}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1 py-0.5">
        <p className="text-[15px] font-bold leading-tight text-[var(--hero-portal-text)]">
          Jenish Desai - Portal
        </p>
        <p className="mt-1 text-xs leading-snug text-[var(--hero-portal-muted)]">
          Hey! Could you please review a document for me?
        </p>
        <p className="mt-1.5 text-[11px] font-medium text-[var(--hero-muted)]">
          <span className="underline decoration-[var(--hero-muted)]/80 underline-offset-2">
            MAT-2226
          </span>
          {" - 3 h ago"}
        </p>
      </div>
    </motion.div>
  );
}
