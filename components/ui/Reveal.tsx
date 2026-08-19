"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const directions = {
  up: { y: 34, x: 0 },
  left: { y: 0, x: -42 },
  right: { y: 0, x: 42 },
  none: { y: 0, x: 0 },
} as const;

const premiumEase = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.86,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof directions;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const offset = directions[direction];

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration, delay, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.72, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}