import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles//Navbar.css";
import logo from "../assets/logo.svg";
import Secondlogo from "../assets/secondlogo.svg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Services", path: "/services" },
  { name: "Press Release", path: "/press" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img
            src={Secondlogo} // replace with your second logo import
            alt="Second Logo"
            className="second-logo"
          />
          <img src={logo} alt="Logo" />

          {/* New Logo */}
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
          />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {({ isActive }) => (
                <div className={`nav-item ${isActive ? "active" : ""}`}>
                  {item.name}

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="underline"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}

          {/* CTA */}
          <Link to="/propose-idea">
            <motion.button
              className="cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Pitch
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="nav-links mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}

              <Link to="/propose-idea">
                <button className="cta-btn">Submit Pitch</button>
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
