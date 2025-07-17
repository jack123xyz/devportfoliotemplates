"use client";

import { motion } from "framer-motion";
import TypedText from "./TypedText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-night to-hacker-green-dark  opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-hacker-green to-hacker-green-medium">
            <TypedText strings={["Jack-Anderson$"]} />
          </h1>
          <p className="text-xl md:text-2xl text-lavender-light mb-8">
            Web Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2  text-hacker-green-light bg-night/80 rounded-full border border-hacker-green/50">
              Vue
            </span>
            <span className="px-4 py-2 text-hacker-green-light bg-night/80 rounded-full border border-hacker-green/50">
              Javascript
            </span>
            <span className="px-4 py-2 text-hacker-green-light bg-night/80 rounded-full border border-hacker-green/50">
              Tailwind CSS
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-hacker-green"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
