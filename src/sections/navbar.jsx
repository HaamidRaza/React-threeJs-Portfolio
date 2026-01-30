import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "home", // Remove the '#' - react-scroll uses IDs directly
  },
  {
    id: 2,
    name: "About",
    href: "about",
  },
  { id: 3, name: "Projects", href: "projects" },
  {
    id: 4,
    name: "Work",
    href: "work",
  },
  {
    id: 5,
    name: "Contact",
    href: "contact",
  },
];

const NavItem = ({ onClick }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <Link
            to={href}
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-li-a cursor-pointer"
            onClick={onClick}
            spy={true} // Highlights active section
            activeClass="active" // Add CSS class for active link
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("header")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-100 font-bold text-xl hover:text-white transition-colors"
          >
            Haamid
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItem onClick={closeMenu} />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItem onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
