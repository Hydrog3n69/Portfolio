import { motion } from "framer-motion";
import React from "react";
import "../App.css";

export default function Projets() {
  return (
    <div className="portfolio-page">
      <motion.div
        className="portfolio-container"
        initial={{ opacity: 0, y: "-100%", scale: 0.8 }}
        animate={{ opacity: 1, y: "0%", scale: 1 }}
        exit={{ opacity: 0, y: "100%", scale: 1.2 }}
      >
        <h1>hello portfolio</h1>
      </motion.div>
    </div>
  );
}
