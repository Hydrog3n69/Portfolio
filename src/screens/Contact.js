import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  const animHover = () => {
    // const navLinks = document.querySelectorAll("a");
    // navLinks.forEach();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <div className="contact-link">
        <ul>
          <a href="mailto:florian.jaimond@gmail.com" onMouseOver={animHover}>
            <li>Mail</li>
          </a>
          <li>Téléphone</li>
          <a href="https://github.com/Hydrog3n69" onMouseOver={animHover}>
            <li>Github</li>
          </a>
          <a
            href="https://www.linkedin.com/in/florian-jaimond-a44a301a3/"
            onMouseOver={animHover}
          >
            <li>Linkedin</li>
          </a>
          <a
            href="https://www.facebook.com/flo.coolzen"
            onMouseOver={animHover}
          >
            <li>Facebook</li>
          </a>
          <a href="https://twitter.com/?lang=fr" onMouseOver={animHover}>
            <li>Twitter</li>
          </a>
        </ul>
      </div>
    </motion.div>
  );
}
