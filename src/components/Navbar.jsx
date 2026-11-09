import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>Explore Lebanon</h2>
            <div className="nav-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/destinations">Destinations</NavLink>
                <NavLink to="/activities">Activities</NavLink>
                <NavLink to="/food">Food</NavLink>
                <NavLink to="/offers">Offers</NavLink>
                <NavLink to="/planner">📍 My Planner & Favs</NavLink>
                <NavLink to="/contact">Contact</NavLink>

                { }
                <DarkMode />
            </div>
        </nav>
    );
}

export default Navbar;