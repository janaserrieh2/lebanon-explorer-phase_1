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
        localStorage.setItem(
            "fav_destinations",
            JSON.stringify(updated)
        );
    };

    const handleAddTrip = (e) => {
        e.preventDefault();

        if (!destination.trim() || !date) return;

        const newTrip = {
            id: Date.now(),
            destination: destination.trim(),
            date,
        };

        setPlans((previous) => [...previous, newTrip]);

        setDestination("");
        setDate("");
    };

    const handleDeleteTrip = (id) => {
        setPlans((previous) =>
            previous.filter((trip) => trip.id !== id)
        );
    };

    return (
        <section className="container">
            <h1 className="title">My Saved Favorites ❤️</h1>

            {favs.length === 0 ? (
                <div className="empty-state">
                    <p>No favorites saved yet!</p>

                    <Link to="/destinations" className="btn">
                        Explore & Add Favorites
                    </Link>
                </div>
            ) : (
                <div className="grid">
                    {favs.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.img} alt={item.name} />

                            <div className="card-content">
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>

                                <button
                                    className="btn delete-btn"
                                    onClick={() => removeFav(item.id)}
                                >
                                    🗑 Remove Favorite
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="planner-section">
                <h2 className="title">Personal Trip Planner 📍</h2>

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
                        min={new Date().toISOString().split("T")[0]}
                        required
                    />

                    <button type="submit" className="btn">
                        ➕ Add to My Itinerary
                    </button>
                </form>

                <h2 className="trip-heading">
                    Scheduled Trips ({plans.length})
                </h2>

                {plans.length === 0 ? (
                    <p className="empty-message">
                        No trips scheduled yet. Start planning your next adventure!
                    </p>
                ) : (
                    <div className="grid">
                        {plans.map((trip) => (
                            <div className="card" key={trip.id}>
                                <div className="card-content">
                                    <h3>📍 {trip.destination}</h3>
                                    <p>
                                        <strong>Date:</strong> {trip.date}
                                    </p>

                                    <button
                                        className="btn delete-btn"
                                        onClick={() => handleDeleteTrip(trip.id)}
                                    >
                                        Delete Trip
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default TripPlanner;