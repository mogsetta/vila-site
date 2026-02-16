"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionReveal({
  children,
}: {
  children: ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              ease: "easeOut",
            }
      }
    >
      {children}
    </motion.div>
  );
}