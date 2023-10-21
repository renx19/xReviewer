import React, { useState } from "react";
import "./Menu.css"; // Make sure to import your CSS file
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from 'react-router-dom';

const circularMenu = document.querySelector('.circular-menu');

let offsetX, offsetY;
let isDragging = false;



const CircularMenu = ({ isMenuToggled, setIsMenuToggled, setSelectedPage }) => {
  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  

  return (
    <div className={`circular-menu ${isMenuToggled ? "active" : ""}`}>
      <a className="floating-btn" onClick={toggleMenu}>
        <img
          src={isMenuToggled ? require("../assets/bars (1).png") : require("../assets/menu-burger (1).png")}
          alt={isMenuToggled ? "Close Menu" : "Open Menu"}
        />
      </a>

      <menu className="items-wrapper">
        <NavLink to="/home" className="menu-item">
          <img src={require("../assets/house.png")} alt="Home" />
        </NavLink>
        <NavLink to="/ToDoApp" className="menu-item">
          <img src={require("../assets/to-do-list.png")} alt="ToDoApp" />
        </NavLink>
        <NavLink to="/Notes" className="menu-item">
          <img src={require("../assets/notes.png")} alt="Notes" />
        </NavLink>
        <NavLink to="/Flashcards" className="menu-item">
          <img src={require("../assets/flash-cards.png")} alt="Flashcards" />
        </NavLink>
        <NavLink to="/Quiz" className="menu-item">
          <img src={require("../assets/ideas.png")} alt="Quiz" />
        </NavLink>
      </menu>
    </div>
  );
};

export default CircularMenu;
