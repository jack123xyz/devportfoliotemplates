"use client";

import { motion } from "framer-motion";
import TypedText from "./TypedText";

const skills = [
  { skill: "Vue/Vite", level: 100 },
  { skill: "React", level: 100 },
  { skill: "UI/UX Design", level: 100 },
  { skill: "CSS/Tailwind", level: 100 },
  { skill: "JavaScript", level: 100 },
  { skill: "TypeScript", level: 100 },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-hacker-green-darkest/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-hacker-green"
        >
          Jack-Anderson${" "}
          <TypedText strings={["ls Techinical-Skills/"]} startOnView={true} />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span>{item.skill}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-hacker-green-darkest to-hacker-green-light"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
