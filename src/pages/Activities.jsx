function Activities() {
    const activities = [
        {
            name: "Hiking",
            img: "https://images.pexels.com/photos/13020558/pexels-photo-13020558.jpeg",
            desc: "Explore Lebanon's beautiful mountain trails.",
            rating: "⭐ 4.9",
        },
        {
            name: "Camping",
            img: "https://images.pexels.com/photos/30563253/pexels-photo-30563253.jpeg",
            desc: "Enjoy peaceful nights surrounded by nature.",
            rating: "⭐ 4.8",
        },
        {
            name: "Skiing",
            img: "https://images.pexels.com/photos/20091365/pexels-photo-20091365.jpeg",
            desc: "Enjoy winter sports in Lebanon's snowy resorts.",
            rating: "⭐ 4.9",
        },
        {
            name: "Paragliding",
            img: "https://images.pexels.com/photos/5303379/pexels-photo-5303379.jpeg",
            desc: "Enjoy breathtaking views from above.",
            rating: "⭐ 5.0",
        },
        {
            name: "River Rafting",
            img: "https://images.pexels.com/photos/11183384/pexels-photo-11183384.jpeg",
            desc: "Experience river adventures in the Assi River.",
            rating: "⭐ 4.9",
        },
        {
            name: "Zipline Adventure",
            img: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=800",
            desc: "Enjoy exciting zipline experiences over nature.",
            rating: "⭐ 4.8",
        },
    ];

    return (
        <section className="container">
            <h1 className="title">Outdoor Activities</h1>

            <p className="page-subtitle">
                Discover exciting adventures and outdoor experiences
                across Lebanon.
            </p>

            <div className="grid">
                {activities.map((activity) => (
                    <div className="card" key={activity.name}>
                        <img src={activity.img} alt={activity.name} />

                        <div className="card-content">
                            <h3>{activity.name}</h3>
                            <p>{activity.desc}</p>

                            <p className="rating">{activity.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Activities;