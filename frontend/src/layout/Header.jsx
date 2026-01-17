import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const nav_links = [
  { id: 'planner', label: 'Planner', path: '/planner' },
]; 

const Hamburger = ({ isOpen, toggle }) => (
  <button
    className={`hamburger ${isOpen ? 'active' : ''}`}
    onClick={toggle}
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
  >
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </button>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">

        <div className="header-brand">
          <Link to="/" className="brand-link" onClick={closeMenu}>
            Event Ledger
          </Link>
        </div>

        {/* HAMBURGER icon. Visible only on Mobile */}
        <Hamburger isOpen={isOpen} toggle={toggleMenu} />

        <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
          {nav_links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}


          <div className="nav-action">
            <button className="login-btn"
              onClick={() => alert("Login coming soon!")}>
              Sign In
            </button>
          </div>

        </nav>

      </div>
    </header>
  );
};