import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <h3>Explore Lebanon</h3>
            <p>Discover beauty, culture & history across Lebanon</p>
            <div className="nav-links" style={{ justifyContent: "center", margin: "15px 0" }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <p>&copy; 2026 All Rights Reserved</p>
        </footer>
    );
}

export default Footer;