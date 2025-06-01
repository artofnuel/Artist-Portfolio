import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import useStore from "../../store/useStore";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { menuOpen, toggleMenu, closeMenu } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Music", path: "#music" },
    { name: "Videos", path: "#videos" },
    { name: "Gallery", path: "#gallery" },
    { name: "Tour", path: "#tour" },
    { name: "Contact", path: "#contact" },
  ];

  const handleNavClick = () => {
    closeMenu();
  };

  return (
    <header
      className={`header${
        menuOpen ? " bg-black" : isScrolled ? " scrolled" : ""
      }`}
    >
      <div className="container header-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">SOUND</a>
        </motion.div>

        <nav className="desktop-nav">
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={item.path}>{item.name}</a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={`mobile-menu ${menuOpen ? "bg-black" : ""}`}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <nav>
                <ul>
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a href={item.path} onClick={handleNavClick}>
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
