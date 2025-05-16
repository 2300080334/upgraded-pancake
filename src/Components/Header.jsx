import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1>Home Services</h1>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#login">Login</a>
      </nav>
    </header>
  );
}

export default Header;
