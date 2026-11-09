function About() {
    return (
        <section className="container">
            <h1 className="title">About Explore Lebanon</h1>

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "40px", marginBottom: "60px" }}>
                <div>
                    <h2 style={{ fontSize: "28px", marginBottom: "15px", color: "#0284c7" }}>Our Story & Mission</h2>
                    <p style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: "15px", color: "#475569" }}>
                        <strong>Explore Lebanon</strong> is a modern tourism platform designed to showcase Lebanon’s breathtaking landscapes, rich culture, and historical treasures to travelers worldwide.
                    </p>
                    <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569" }}>
                        We aim to make discovering Lebanon easy and interactive—connecting you directly with ancient landmarks, top hotels, local cuisine, and outdoor adventures in one seamless experience.
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200"
                        alt="Lebanon Scenery"
                        style={{ borderRadius: "20px", height: "350px", objectFit: "cover", width: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    />
                </div>
            </div>

            {/* Extra Features Grid to enhance Design */}
            <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>Why Choose Us?</h2>
            <div className="grid">
                <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                    <h3>🌍 Authentic Guides</h3>
                    <p>Real recommendations crafted by local travel experts.</p>
                </div>
                <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                    <h3>📍 Smart Itineraries</h3>
                    <p>Plan your trips and save your favorite destinations easily.</p>
                </div>
                <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                    <h3>⭐ Trusted Quality</h3>
                    <p>Verified ratings and reviews for hotels, food, and activities.</p>
                </div>
            </div>
        </section>
    );
}

export default About;