"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  className?: string;
  startOnView?: boolean;
}

export default function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1000,
  loop = false,
  className = "",
  startOnView = false,
}: TypedTextProps) {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const [isInView, setIsInView] = useState(!startOnView);

  useEffect(() => {
    if (el.current && isInView) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        loop,
        cursorChar: "|",
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop, isInView]);

  useEffect(() => {
    if (!startOnView || !el.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el.current);

    return () => observer.disconnect();
  }, [startOnView]);

  return <span ref={el} className={className}></span>;
}
