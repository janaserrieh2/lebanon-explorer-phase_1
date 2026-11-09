function Activities() {
    const activities = [
        { name: "Hiking", img: "https://images.pexels.com/photos/13020558/pexels-photo-13020558.jpeg", desc: "Explore Lebanon's beautiful mountain trails.", rating: "⭐ 4.9" },
        { name: "Camping", img: "https://images.pexels.com/photos/30563253/pexels-photo-30563253.jpeg", desc: "Spend unforgettable nights under the stars.", rating: "⭐ 4.8" },
        { name: "Skiing", img: "https://images.pexels.com/photos/20091365/pexels-photo-20091365.jpeg", desc: "Enjoy winter sports in snowy resorts.", rating: "⭐ 4.9" },
        { name: "Paragliding", img: "https://images.pexels.com/photos/5303379/pexels-photo-5303379.jpeg", desc: "Fly above valleys and breathtaking views.", rating: "⭐ 5.0" },
        { name: "River Rafting", img: "https://images.pexels.com/photos/11183384/pexels-photo-11183384.jpeg", desc: "Adventure through exciting river rapids in Assi river.", rating: "⭐ 4.9" },
        { name: "Zipline Adventure", img: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=800", desc: "Experience thrilling zipline rides over lush forests.", rating: "⭐ 4.8" }
    ];

    return (
        <section className="container">
            <h1 className="title">Activities</h1>
            <div className="grid">
                {activities.map((a, index) => (
                    <div className="card" key={index}>
                        <img src={a.img} alt={a.name} />
                        <div className="card-content">
                            <h3>{a.name}</h3>
                            <p>{a.desc}</p>
                            <p style={{ marginTop: "10px", fontWeight: "600", color: "#0284c7" }}>{a.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Activities;