"use client";
import type { ReactElement } from "react";
import { motion } from "framer-motion";

export default function AboutPage(): ReactElement {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>AboutPage</div>
    </motion.div>
  );
}
