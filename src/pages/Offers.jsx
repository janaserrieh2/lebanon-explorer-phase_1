import { useNavigate } from "react-router-dom";

function Offers() {
    const navigate = useNavigate();

    const offers = [
        {
            title: "Beach Escape",
            desc: "Enjoy a relaxing getaway along the Mediterranean coast.",
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
        {
            title: "Mountain Retreat",
            desc: "Relax in Lebanon's mountains and enjoy fresh air.",
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        },
        {
            title: "City Experience",
            desc: "Discover Beirut's culture, architecture, and attractions.",
            img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
        },
        {
            title: "Food Tour",
            desc: "Explore the delicious flavors of Lebanese cuisine.",
            img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
        },
        {
            title: "Heritage & History Tour",
            desc: "Discover the history of Byblos and Baalbek.",
            img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
        },
        {
            title: "Ski & Snow Package",
            desc: "Enjoy a winter experience in Lebanon's mountain resorts.",
            img: "https://images.pexels.com/photos/20091365/pexels-photo-20091365.jpeg",
        },
    ];

    const handleBookNow = (offerTitle) => {
        navigate("/contact", {
            state: { selectedOffer: offerTitle },
        });
    };

    return (
        <section className="container">
            <h1 className="title">Services & Special Offers</h1>

            <p className="page-subtitle">
                Find an experience that matches your next adventure in Lebanon.
            </p>

            <div className="grid">
                {offers.map((offer) => (
                    <div className="card" key={offer.title}>
                        <img src={offer.img} alt={offer.title} />

                        <div className="card-content">
                            <h3>{offer.title}</h3>
                            <p>{offer.desc}</p>

                            <button
                                className="btn"
                                onClick={() => handleBookNow(offer.title)}
                            >
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