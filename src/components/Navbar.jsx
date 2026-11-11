import { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <NavLink to="/" className="brand" onClick={closeMenu}>
                    Explore <span>Lebanon 🇱🇧</span>
                </NavLink>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen((previous) => !previous)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
                <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                <NavLink to="/destinations" onClick={closeMenu}>Destinations</NavLink>
                <NavLink to="/activities" onClick={closeMenu}>Activities</NavLink>
                <NavLink to="/food" onClick={closeMenu}>Food</NavLink>
                <NavLink to="/offers" onClick={closeMenu}>Offers</NavLink>
                <NavLink to="/planner" onClick={closeMenu}>📍 My Planner</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

                <DarkMode />
            </div>
        </nav>
    );
}

export default Navbar;