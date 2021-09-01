import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  const toggleSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 800) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });
  return (
    <nav>
      {(toggleMenu || largeur > 800) && (
        <ul className="liste">
          <Link to="/">
            <li className="items">
              <a href="home">Home</a>
            </li>
          </Link>
          <Link to="/About">
            <li className="items">
              <a href="About">About</a>
            </li>
          </Link>
          <Link to="/Projets">
            <li className="items">
              <a href="Projets">Projets</a>
            </li>
          </Link>
          <Link to="/Contact">
            <li className="items">
              <a href="contact">Contact</a>
            </li>
          </Link>
        </ul>
      )}
      <button onClick={toggleSmallScreen} className="pulse-anime">
        Menu
      </button>
    </nav>
  );
}
