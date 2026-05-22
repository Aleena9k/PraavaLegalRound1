"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Gavel,
  FileText,
  CheckSquare,
  Receipt,
  Calendar,
  Moon,
  Sun,
} from "lucide-react";
import BackgroundPills from "@/components/BackgroundPills";
import FloatingCard from "@/components/FloatingCard";
import PortalCard from "@/components/PortalCard";
import { cn } from "@/lib/utils";

const whiteIcon = "h-6 w-6 shrink-0 text-white";
const orangeIcon =
  "h-6 w-6 shrink-0 text-[var(--hero-orange-accent)] stroke-[var(--hero-orange-accent)]";

export default function HeroSection() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={cn(
        "relative min-h-screen bg-[var(--hero-bg)] transition-colors duration-300",
        isDark && "dark"
      )}
    >
      <button
        type="button"
        onClick={() => setIsDark((prev) => !prev)}
        className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 text-zinc-700 shadow-md backdrop-blur-sm transition hover:scale-105 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
        {/* Grey decorative pill shapes — reference layout + subtle drift */}
        <BackgroundPills />

        {/* Blurred ambient blobs */}
        <div
          className="pointer-events-none absolute left-[30%] top-[10%] z-0 h-96 w-96 rounded-full bg-blue-200 opacity-30 blur-3xl dark:bg-blue-900/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[10%] right-[20%] z-0 h-80 w-80 rounded-full bg-indigo-300 opacity-20 blur-3xl dark:bg-indigo-800/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[10%] top-[40%] z-0 h-64 w-64 rounded-full bg-purple-200 opacity-20 blur-3xl dark:bg-purple-900/30"
          aria-hidden
        />

        {/* Matters — orange, top-left */}
        <FloatingCard
          color="orange"
          rotation={-10}
          icon={<Gavel className={whiteIcon} strokeWidth={2} />}
          label="Matters"
          animationDelay={0}
          index={0}
          className="left-[4%] top-[6%]"
        />

        {/* Billing — blue, top-right */}
        <FloatingCard
          color="blue"
          rotation={6}
          icon={<Receipt className={whiteIcon} strokeWidth={2} />}
          label="Billing"
          animationDelay={0.5}
          index={1}
          className="right-[4%] top-[6%]"
        />

        {/* Portal — top-right, above headline */}
        <PortalCard
          rotation={-3}
          animationDelay={1}
          index={3}
          className="right-[4%] top-[18%]"
        />

        {/* Documents — navy + orange accent */}
        <FloatingCard
          color="dark"
          rotation={8}
          icon={<FileText className={orangeIcon} strokeWidth={2} />}
          label="Documents"
          animationDelay={1.5}
          index={2}
          className="bottom-[28%] left-[8%]"
        />

        {/* Tasks — navy + orange accent */}
        <FloatingCard
          color="dark"
          rotation={-5}
          icon={<CheckSquare className={orangeIcon} strokeWidth={2} />}
          label="Tasks"
          animationDelay={2}
          index={4}
          className="bottom-[16%] left-[16%]"
        />

        {/* Calendar — bottom-right */}
        <FloatingCard
          color="dark-solid"
          rotation={10}
          icon={<Calendar className={whiteIcon} strokeWidth={2} />}
          label="Calendar"
          animationDelay={2.5}
          index={5}
          className="bottom-[16%] right-[6%]"
        />

        {/* Centered headline + subtext + CTA */}
        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-4 text-center">
          <motion.h1
            className="relative z-10 text-5xl font-normal leading-tight tracking-tight text-[var(--hero-muted)] sm:text-6xl dark:text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            A single platform to{" "}
            <span className="font-bold text-[var(--hero-navy-bold)] dark:text-white">
              manage
            </span>{" "}
            every part of your{" "}
            <span className="font-bold text-[var(--hero-navy-bold)] dark:text-white">
              legal work
            </span>
          </motion.h1>

          <motion.p
            className="relative z-10 mt-6 text-lg font-medium leading-relaxed text-[var(--hero-subtext)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication - all in one system.
          </motion.p>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <button
              type="button"
              className="mt-8 rounded-full bg-[var(--hero-navy-bold)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:opacity-90 dark:bg-white dark:text-slate-900"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
