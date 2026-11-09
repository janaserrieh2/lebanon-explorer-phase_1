import { useState, useEffect } from "react";

const places = [
    { id: 1, name: "Byblos (Jbeil)", desc: "One of the oldest continuously inhabited cities in the world.", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800" },
    { id: 2, name: "Baalbek", desc: "Massive Roman temples and ancient historical ruins.", img: "https://images.pexels.com/photos/32488823/pexels-photo-32488823.jpeg" },
    { id: 3, name: "Faraya", desc: "Famous snowy ski resort and beautiful mountain view.", img: "https://images.pexels.com/photos/20091365/pexels-photo-20091365.jpeg" },
    { id: 4, name: "Beirut Downtown", desc: "Vibrant capital combining architecture, nightlife, and sea views.", img: "https://images.pexels.com/photos/14368431/pexels-photo-14368431.jpeg" },
    { id: 5, name: "Cedars of God (Bcharre)", desc: "Majestic ancient cedar forest in the northern mountains.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
    { id: 6, name: "Jeita Grotto", desc: "Breathtaking limestone caves with underground rivers.", img: "https://images.pexels.com/photos/14776259/pexels-photo-14776259.jpeg" }
];

function Destinations() {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState(() => {
        try {
            const saved = localStorage.getItem("fav_destinations");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("fav_destinations", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFav = (place) => {
        setFavorites((prev) => {
            const exists = prev.some((item) => item.id === place.id);
            return exists ? prev.filter((item) => item.id !== place.id) : [...prev, place];
        });
    };

    const filtered = places.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="container">
            <h1 className="title">Explore Destinations</h1>
            <input
                className="search"
                placeholder="Search destinations (e.g. Byblos)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid">
                {filtered.map((p) => {
                    const isFav = favorites.some((item) => item.id === p.id);
                    return (
                        <div className="card" key={p.id}>
                            <img src={p.img} alt={p.name} />
                            <div className="card-content">
                                <h3>{p.name}</h3>
                                <p>{p.desc}</p>
                                <button className="btn" onClick={() => toggleFav(p)}>
                                    {isFav ? "💔 Remove Favorite" : "❤️ Save Favorite"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Destinations;