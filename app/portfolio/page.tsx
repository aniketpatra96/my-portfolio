"use client";
import type { ReactElement } from "react";
import { motion } from "framer-motion";

export default function PortfolioPage(): ReactElement {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>PortfolioPage</div>
    </motion.div>
  );
}
