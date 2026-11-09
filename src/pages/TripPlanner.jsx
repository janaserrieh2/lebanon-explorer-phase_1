import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TripPlanner() {
    const [favs, setFavs] = useState(() => {
        try {
            const saved = localStorage.getItem("fav_destinations");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [plans, setPlans] = useState(() => {
        try {
            const saved = localStorage.getItem("user_trips");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        localStorage.setItem("user_trips", JSON.stringify(plans));
    }, [plans]);

    const removeFav = (id) => {
        const updated = favs.filter((item) => item.id !== id);
        setFavs(updated);
        localStorage.setItem("fav_destinations", JSON.stringify(updated));
    };

    const handleAddTrip = (e) => {
        e.preventDefault();
        if (!destination.trim() || !date) return;

        const newTrip = { id: Date.now(), destination, date };
        setPlans([...plans, newTrip]);
        setDestination("");
        setDate("");
    };

    const handleDeleteTrip = (id) => {
        setPlans(plans.filter((t) => t.id !== id));
    };

    return (
        <section className="container">
            <h1 className="title">My Saved Favorites ❤️</h1>
            {favs.length === 0 ? (
                <div style={{ textAlign: "center", marginBottom: "50px" }}>
                    <p>No favorites saved yet!</p>
                    <Link to="/destinations" className="btn" style={{ marginTop: "12px" }}>
                        Explore & Add Favorites
                    </Link>
                </div>
            ) : (
                <div className="grid" style={{ marginBottom: "60px" }}>
                    {favs.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <div className="card-content">
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                                <button
                                    className="btn"
                                    style={{ background: "#a83232", marginTop: "10px" }}
                                    onClick={() => removeFav(item.id)}
                                >
                                    🗑 Remove Favorite
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <hr style={{ margin: "50px 0", opacity: "0.2" }} />

            <h1 className="title">Personal Trip Planner 📍</h1>
            <form className="contact-form" onSubmit={handleAddTrip}>
                <input
                    type="text"
                    placeholder="Destination Name (e.g. Tyros Beach)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit" className="btn">
                    ➕ Add to My Itinerary
                </button>
            </form>

            <h2 style={{ marginTop: "40px", marginBottom: "20px", textAlign: "center" }}>
                Scheduled Trips ({plans.length})
            </h2>

            {plans.length === 0 ? (
                <p style={{ textAlign: "center" }}>No upcoming trips scheduled yet.</p>
            ) : (
                <div className="grid">
                    {plans.map((t) => (
                        <div className="card" key={t.id}>
                            <div className="card-content">
                                <h3>📍 {t.destination}</h3>
                                <p><strong>Date:</strong> {t.date}</p>
                                <button
                                    className="btn"
                                    style={{ background: "#a83232", marginTop: "10px" }}
                                    onClick={() => handleDeleteTrip(t.id)}
                                >
                                    Delete Trip
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default TripPlanner;