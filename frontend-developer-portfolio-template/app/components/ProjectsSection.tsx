"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import TypedText from "./TypedText";

const projects = [
  {
    title: "FrightProps eCommerce Store",
    description:
      "A complete UX/UI rehaul of one of the largest Halloween prop stores in the US, assisting in the transition from Magento to Magento 2",
    image: "/welcome-thumbnail.png",
    tags: ["Hyva", "Javascript", "Tailwind CSS", "PHP"],
    url: "https://new.frightprops.com",
    glowColor: "#9055a2",
  },
  {
    title: "Notflix",
    description:
      "A Netflix clone built with Vue + Vite focused on replicating the originial site's polished user interface",
    image: "/NotflixLogo.png",
    aspectRatio: "object-cover",
    tags: ["Vue.js", "Vite", "Javascript", "TailwindCSS"],
    url: "https://notflix.jack123.xyz",
    glowColor: "#63ad58",
  },
  {
    title: "PoisonProps eCommerce Store",
    description:
      "Designed and developed a Halloween prop store with a focus on user experience and performance, assiting with the transition from Magento to Magento 2",
    image: "/PPlogo.png",
    tags: ["PHP", "CSS", "Magento", "Apache"],
    url: "https://poisonprops.com",
    glowColor: "#ce1e25",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-hacker-green"
        >
          Jack-Anderson${" "}
          <TypedText
            strings={["cd Featured-Projects/"]}
            startOnView={true} // Add this prop
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer"
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-night/10 rounded-xl overflow-hidden backdrop-blur-sm border border-night 
    transition-all duration-300 ease-in-out hover:scale-[1.03] hover:z-10"
                style={
                  {
                    "--glow-color": project.glowColor,
                  } as React.CSSProperties
                }
                whileHover={{
                  boxShadow: `0 0 20px ${project.glowColor}`,
                }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`${project.aspectRatio || "object-contain"} `}
                  />
                  <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-center text-lavender-light">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-lavender">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 text-night bg-hacker-green-light rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
