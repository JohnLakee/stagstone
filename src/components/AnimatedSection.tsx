"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const variantMap = {
  "fade-up": fadeInUp,
  "slide-left": slideInLeft,
  "slide-right": slideInRight,
  stagger: staggerContainer,
};

type AnimationType = keyof typeof variantMap;

export function AnimatedSection({
  children,
  animation = "fade-up",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  animation?: AnimationType;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={variantMap[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}
