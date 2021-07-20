import { motion } from 'framer-motion'
import React from 'react'
import '../App.css'

export default function Home() {
    return (

      <div className="home-page">
      <motion.div className="home-container" 
        initial={{ opacity:0, y:'-100%', scale: 0.8}}
        animate={{ opacity:1, y:'0%', scale: 1}}
        exit={{opacity:0, y:'100%', scale: 1.2}}
      >
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        </motion.div>
        </div>
    )
}
