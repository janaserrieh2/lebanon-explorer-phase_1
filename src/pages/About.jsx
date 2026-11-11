
import { Link } from "react-router-dom";

function About() {
    return (
        <section className="container">
            <h1 className="title">About Explore Lebanon</h1>

            <div className="about-layout">
                <div className="about-text">
                    <span className="section-label">WHO WE ARE</span>

                    <h2>Our Story & Mission</h2>

                    <p>
                        <strong>Explore Lebanon</strong> is a modern tourism
                        platform designed to showcase Lebanon's breathtaking
                        landscapes, rich culture, and historical treasures.
                    </p>

                    <p>
                        Our mission is to make discovering Lebanon easy and
                        enjoyable by bringing destinations, local cuisine,
                        outdoor activities, and travel planning together
                        in one interactive experience.
                    </p>

                    <Link to="/destinations" className="btn">
                        Discover Lebanon
                    </Link>
                </div>

                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200"
                        alt="Beautiful landscape"
                    />
                </div>
            </div>

            <h2 className="subheading">Why Choose Us?</h2>

            <div className="grid">
                <div className="card info-card">
                    <span>🌍</span>
                    <h3>Authentic Guides</h3>
                    <p>
                        Discover interesting places and recommendations
                        inspired by Lebanon's local culture.
                    </p>
                </div>

                <div className="card info-card">
                    <span>📍</span>
                    <h3>Smart Itineraries</h3>
                    <p>
                        Plan your trips and save your favorite destinations
                        in one convenient place.
                    </p>
                </div>

                <div className="card info-card">
                    <span>⭐</span>
                    <h3>Curated Experiences</h3>
                    <p>
                        Explore selected destinations, food, and activities
                        across different regions of Lebanon.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
