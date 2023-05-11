import React from "react";
import { useState } from "react";
import "./slider.css";

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log("open");
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="toggle-button" onClick={handleToggle}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </button>
      </header>
      <nav className={`sidebar ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>
      <main></main>
    </div>
  );
};

export default Slider;
