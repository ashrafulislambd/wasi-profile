import React from "react";

export default function Header() {
  return (
    <header className="navbar" id="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">
          <span className="navbar-brand-icon">⚓</span>
          <span>Wasi Arman Mostafa</span>
        </a>
        <nav className="navbar-links">
          <a href="#">Home</a>
          <a href="#biography">Biography</a>
          <a href="#professional">Professional</a>
          <a href="#scouting">Scouting</a>
          <a href="#athletics">Athletics</a>
          <a href="#cricket">Cricket</a>
          <a href="#sponsor">Sponsor</a>
        </nav>
      </div>
    </header>
  );
}