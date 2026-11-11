import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="cover">
                <div className="cover-content">
                    <span className="hero-badge">
                        DISCOVER THE BEAUTY OF LEBANON
                    </span>

                    <h1>Where History Meets Beauty</h1>

                    <p>
                        From breathtaking mountains to beautiful beaches,
                        discover Lebanon's culture, history, food, and
                        unforgettable experiences.
                    </p>

                    <div className="hero-actions">
                        <Link to="/destinations" className="btn">
                            Explore Destinations
                        </Link>

                        <Link to="/planner" className="btn btn-outline">
                            Plan Your Trip
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container">
                <h2 className="title">Experience Lebanon</h2>

                <p className="home-subtitle">
                    Discover the different experiences that make Lebanon
                    a unique destination.
                </p>

                <div className="grid">
                    <div className="card">
                        <img
                            src="https://images.pexels.com/photos/34249501/pexels-photo-34249501.jpeg"
                            alt="Lebanon Beach"
                        />

                        <div className="card-content">
                            <h3>Beaches</h3>
                            <p>
                                Relax on the Mediterranean coast with crystal
                                clear water and beautiful sunsets.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img
                            src="https://images.pexels.com/photos/31298948/pexels-photo-31298948.jpeg"
                            alt="Lebanon Mountains"
                        />

                        <div className="card-content">
                            <h3>Mountains</h3>
                            <p>
                                Explore breathtaking peaks, hiking trails,
                                and winter ski resorts.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img
                            src="https://images.pexels.com/photos/14368431/pexels-photo-14368431.jpeg"
                            alt="Lebanon Nightlife"
                        />

                        <div className="card-content">
                            <h3>Nightlife</h3>
                            <p>
                                Experience Beirut's nightlife, music,
                                restaurants, and modern culture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quote">
                <h2>
                    "Lebanon is not a place you visit... it's a feeling
                    you live."
                </h2>

                <p>Explore its beauty. Discover its story.</p>
            </section>
        </>
    );
}

export default Home;