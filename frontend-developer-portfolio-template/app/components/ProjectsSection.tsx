"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import TypedText from "./TypedText";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";
import { useState, useEffect, useCallback } from "react";

const projects = [
  {
    title: "FrightProps eCommerce Store",
    description:
      "A complete UX/UI rehaul of one of the largest Halloween prop stores in the US, assisting in the transition from Magento to Magento 2",
    image: "/welcome-thumbnail.png",
    tags: ["Hyva", "JavaScript", "Tailwind CSS", "PHP"],
    url: "https://new.frightprops.com",
    glowColor: "#ffbb03",
  },
  {
    title: "Notflix",
    description:
      "A Netflix clone built with Vue + Vite focused on replicating the originial site's polished user interface",
    image: "/NotflixLogo.png",
    aspectRatio: "object-cover",
    tags: ["Vue.js", "Vite", "JavaScript", "TailwindCSS"],
    url: "https://jack-notflix.netlify.app/",
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
  {
    title: "Freelancely",
    description:
      "A comprehensive freelance management system designed to streamline project administration, financial tracking, and document processing for independent contractors and small businesses.",
    image: "/freelancelyLogo.png",
    tags: ["Next.js", "TypeScript", "Python", "Tailwind CSS"],
    url: "https://freelancely.netlify.app",
    glowColor: "#c77dff",
  },
  {
    title: "CS2 Retribution Tracker",
    description:
      "A tool for gamers to discover which players from their recent CS2 matches got banned for cheating after playing with them. Track cheaters who received VAC bans or Game bans following their matches with you.",
    image: "/cs.svg",
    tags: ["React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    url: "https://bantracker.netlify.app/",
    glowColor: "#9ae600",
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 20000 }),
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", () => onSelect(emblaApi));
    emblaApi.on("select", () => onSelect(emblaApi));
  }, [emblaApi, onSelect]);

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
          <TypedText strings={["cd Featured-Projects/"]} startOnView={true} />
        </motion.h2>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project, index) => (
              <div className="embla__slide" key={index}>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group relative bg-night/10 rounded-xl overflow-hidden backdrop-blur-sm border border-night 
    transition-all duration-300 ease-in-out hover:scale-[1.03] hover:z-10 h-full flex flex-col"
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
                        className={`${
                          project.aspectRatio || "object-contain"
                        } `}
                      />
                      <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4 md:p-6 flex-grow flex flex-col">
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-center text-lavender-light">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base mb-4 text-lavender flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs md:text-sm  px-3 py-1 text-night bg-hacker-green-light rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons">
          <button
            className="embla__button embla__button--prev"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            Prev
          </button>
          <button
            className="embla__button embba__button--next"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
