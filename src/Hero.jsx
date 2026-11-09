import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./Hero.css";

const roles = ["AI Engineer", "Full Stack Developer", "Embedded Systems Engineer", "Music Director", "Photo Editor"];

export default function HeroTitle() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const interval = setInterval(() => setIndex((current) => (current + 1) % roles.length), 4000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="hero-title-container" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.h2
          className="hero-role"
          key={roles[index]}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={prefersReducedMotion ? {} : { opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
