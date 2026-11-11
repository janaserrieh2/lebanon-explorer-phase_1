
import { useState, useEffect } from "react";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons in Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const places = [
    {
        id: 1,
        name: "Byblos (Jbeil)",
        desc: "One of the oldest continuously inhabited cities in the world.",
        img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800",
        position: [34.1236, 35.6511],
    },
    {
        id: 2,
        name: "Baalbek",
        desc: "Discover massive Roman temples and ancient historical ruins.",
        img: "https://images.pexels.com/photos/32488823/pexels-photo-32488823.jpeg",
        position: [34.0069, 36.2039],
    },
    {
        id: 3,
        name: "Faraya",
        desc: "Enjoy beautiful mountain views and snowy winter landscapes.",
        img: "https://images.pexels.com/photos/20091365/pexels-photo-20091365.jpeg",
        position: [33.9833, 35.8333],
    },
    {
        id: 4,
        name: "Beirut Downtown",
        desc: "Explore architecture, restaurants, and the vibrant capital.",
        img: "https://images.pexels.com/photos/14368431/pexels-photo-14368431.jpeg",
        position: [33.8959, 35.4955],
    },
    {
        id: 5,
        name: "Cedars of God (Bcharre)",
        desc: "Discover the majestic ancient cedar forest in the north.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800",
        position: [34.2433, 36.0447],
    },
    {
        id: 6,
        name: "Jeita Grotto",
        desc: "Explore breathtaking limestone caves and underground rivers.",
        img: "https://images.pexels.com/photos/14776259/pexels-photo-14776259.jpeg",
        position: [33.9417, 35.6417],
    },
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
        localStorage.setItem(
            "fav_destinations",
            JSON.stringify(favorites)
        );
    }, [favorites]);

    const toggleFav = (place) => {
        setFavorites((previous) => {
            const exists = previous.some(
                (item) => item.id === place.id
            );

            return exists
                ? previous.filter((item) => item.id !== place.id)
                : [...previous, place];
        });
    };

    const filtered = places.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="container destinations-page">

            <h1 className="title">Explore Destinations</h1>

            <p className="page-subtitle">
                From ancient cities to beautiful mountains, discover
                the places that make Lebanon special.
            </p>

            <input
                className="search"
                placeholder="🔍 Search destinations (e.g. Byblos)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            {/*Interactive Lebanon Map */}
            <div className="map-container">

                <div className="map-header">
                    <div>
                        <span className="map-label">EXPLORE LEBANON</span>
                        <h2>Discover Lebanon 🇱🇧</h2>
                        <p>
                            Find beautiful places and explore Lebanon
                            through our interactive map.
                        </p>
                    </div>

                    <span className="map-count">
                        📍 {filtered.length} Places
                    </span>
                </div>

                <div className="map-frame">
                    <MapContainer
                        center={[33.8547, 35.8623]}
                        zoom={8}
                        scrollWheelZoom={false}
                        className="lebanon-map"
                    >

                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />


                        {filtered.map((place) => (
                            <Marker
                                key={place.id}
                                position={place.position}
                            >
                                <Popup>
                                    <div className="custom-popup">
                                        <strong>{place.name}</strong>
                                        <p>{place.desc}</p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <div className="map-footer">
                    <span>🧭 Explore different regions of Lebanon</span>
                    <span>🌍 Interactive Map</span>
                </div>

            </div>

            {/* Destination Image Cards */}
            <h2 className="destinations-heading">
                Popular Destinations
            </h2>

            {filtered.length === 0 ? (
                <p className="empty-message">
                    No destinations found. Try another search.
                </p>
            ) : (
                <div className="grid">

                    {filtered.map((place) => {
                        const isFav = favorites.some(
                            (item) => item.id === place.id
                        );

                        return (
                            <div className="card" key={place.id}>

                                <img
                                    src={place.img}
                                    alt={place.name}
                                />

                                <div className="card-content">

                                    <h3>{place.name}</h3>

                                    <p>{place.desc}</p>

                                    <button
                                        className={`btn favorite-btn ${isFav ? "saved" : ""
                                            }`}
                                        onClick={() => toggleFav(place)}
                                    >
                                        {isFav
                                            ? "❤️ Remove Favorite"
                                            : "♡ Save Favorite"}
                                    </button>

                                </div>
                            </div>
                        );
                    })}

                </div>
            )}

        </section>
    );
}

export default Destinations;
