import { motion } from 'framer-motion'
import moi from '../Assets/moi.jpg'
import fleche from '../Assets/fleche.png'
import React, { useState } from 'react'
import '../App.css'

export default function About() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="about-page">
    <motion.div 
        initial={{ opacity:0, y:'-100%', scale: 0.8}}
        animate={{ opacity:1, y:'0%', scale: 1}}
        exit={{opacity:0, y:'100%', scale: 1.2}}
        className="container">
      <div className="about-container">
    <div className="slide">
        <img className="me-picture" src={moi} alt="Me"></img>
        <h3>About me ....</h3>
      </div>

      {toggleMenu && (
        <motion.div 
        
        animate={{ opacity:1, y:'00%'}}
        exit={{opacity:0, y:'50%'}}
        className="me-description">
        <p>Aprés 15 ans passé dans l'automobile j'ai décidé de me reconvertir dans le développement Web & Mobile</p>

        <hr className="line"/>

        <p>En mars 2020 j'ai commencé à me former sur Udemy Openclassrooms Grafikart... <br/>J'ai débuté en mars 2021 une formation dev web en 5 mois à la Wild Code School de Lyon, et je compte poursuivre sur une année d'alternance </p>

        <hr className="line"/>

        <h2>Langages / Framework / CMS</h2>
        <p>JavaScript, React, Next, Node.js, MySql, Express, Strapi</p>
        <h2>Librairies</h2>
        <p>Tailwind, Material UI, </p>
      </motion.div>
      )}
      <img 
      type="image" 
      src={fleche}
      alt="fleche"
      onClick={showMenu} 
      className="about-button"
      />
      </div>
    </motion.div>
    </div>
  )
}
