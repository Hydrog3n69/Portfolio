import { motion } from "framer-motion";
import React from "react";
import "../App.css";
import me from "../Assets/me2.jpg";
import fond from "../Assets/fond.jpg";
import work1 from "../Assets/reparauto-main.jpg";
import work2 from "../Assets/reparauto-activitées.jpg";
import work3 from "../Assets/reparauto-avis.jpg";

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-text-big">
          <p>
            <span className="H">H</span>ello
          </p>
          <p>I'm Florian</p>
          <p>Jaimond</p>
          <h2 className="home-text">I'm Web Developer</h2>
        </div>
        <span className="me-container">
          <img className="me" src={me} alt="me" />
        </span>
      </div>
      <img className="fond" src={fond} alt="fond" />

      {/* Work */}

      <div>
        <div className="projets-title">
          <h1>Work</h1>
        </div>
        <div className="projets-container">
          <div className="web-site-container">
            <a href="https://repar-auto-mobile.com/">
              <div className="picture-bloc">
                <p>Réparauto-mobile</p>
                <img src={work1} alt="website" width="300px" />
                <img src={work2} alt="website" width="300px" />
                <img src={work3} alt="website" width="300px" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* About */}

      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-page">
        <div className="about-text">
          <h2>History</h2>
          <p>
            After 15 years in the automobile I decided to retrain in Web &
            Mobile development
          </p>
          <br />
          <p>
            In March 2020 I started to train on Udemy Openclassrooms Grafikart
            ... <br />I started in March 2021 a web dev training in 5 months at
            the Wild Code School of Lyon.
            <br /> I am looking for a work-study program to obtain the diploma
            of designer and developer of applications.
          </p>
          <br />
          <h2>Langages / Framework / CMS</h2>
          <p>JavaScript, React, Next, Node.js, MySql, Strapi</p>
          <br />
          <h2>Librairies</h2>
          <p>Tailwind, Material UI </p>
        </div>
      </div>

      {/* Contact */}

      <motion.div className="contact-page">
        <div className="contact-link">
          <h1 className="contact-title">
            <span className="C">C</span>ontact
          </h1>
          <ul>
            <a href="mailto:florian.jaimond@gmail.com">
              <li>Mail</li>
            </a>
            <a href="https://github.com/Hydrog3n69">
              <li>Github</li>
            </a>
            <a href="https://www.linkedin.com/in/florian-jaimond-a44a301a3/">
              <li>Linkedin</li>
            </a>
            <a href="https://twitter.com/?lang=fr">
              <li>Twitter</li>
            </a>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
