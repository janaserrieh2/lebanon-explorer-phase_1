import { useNavigate } from "react-router-dom";

function Offers() {
    const navigate = useNavigate();

    const offers = [
        { title: "Beach Escape", desc: "Luxury stay on the Mediterranean coast.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
        { title: "Mountain Retreat", desc: "Relax in Lebanon mountains with fresh air.", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
        { title: "City Experience", desc: "Discover Beirut nightlife and culture.", img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" },
        { title: "Food Tour", desc: "Taste authentic Lebanese cuisine.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" },
        { title: "Heritage & History Tour", desc: "Guided tour through ancient Byblos & Baalbek.", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963" },
        { title: "Ski & Snow Package", desc: "Winter resort package in Faraya slopes.", img: "https://images.pexels.com/photos/20091365/pexels-photo-20091365.jpeg" }
    ];

    const handleBookNow = (offerTitle) => {
        navigate("/contact", { state: { selectedOffer: offerTitle } });
    };

    return (
        <section className="container">
            <h1 className="title">Services & Special Offers</h1>
            <div className="grid">
                {offers.map((o) => (
                    <div className="card" key={o.title}>
                        <img src={o.img} alt={o.title} />
                        <div className="card-content">
                            <h3>{o.title}</h3>
                            <p>{o.desc}</p>
                            <button className="btn" onClick={() => handleBookNow(o.title)} style={{ marginTop: "10px" }}>
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Offers;