import { motion } from 'framer-motion'
import React from 'react'

export default function Contact() {
  return (
    <motion.div
    initial={{ opacity:0}}
    animate={{ opacity: 1}}
    exit={{opacity:0}}
    className="contact-page"
    >
      <h1>banana</h1>
    </motion.div>
  )
}
