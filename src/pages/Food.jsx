import { useState, useEffect } from "react";

function Food() {
    const foods = [
        {
            name: "Hummus",
            img: "https://images.pexels.com/photos/19552439/pexels-photo-19552439.jpeg",
            desc: "Creamy chickpea dip with olive oil and tahini.",
        },
        {
            name: "Kibbeh",
            img: "https://images.pexels.com/photos/37448025/pexels-photo-37448025.jpeg",
            desc: "Traditional dish made with bulgur and spices.",
        },
        {
            name: "Tabbouleh",
            img: "https://images.pexels.com/photos/32592714/pexels-photo-32592714.jpeg",
            desc: "Fresh parsley salad with tomatoes, mint, and lemon.",
        },
        {
            name: "Shawarma",
            img: "https://images.pexels.com/photos/30328049/pexels-photo-30328049.png",
            desc: "Marinated meat wrapped in fresh Arabic bread.",
        },
        {
            name: "Lebanese Mixed Grills",
            img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
            desc: "A delicious selection of traditional Lebanese grilled dishes.",
        },
        {
            name: "Authentic Lebanese Knefeh",
            img: "https://media.istockphoto.com/id/1363891849/photo/arabic-traditional-dessert-kunafa-konafa-in-a-tray-with-pistachio-creative-delicious-middle.jpg?b=1&s=612x612&w=0&k=20&c=ej53rkj_j4Um40U8oKHpAW9I4igtSJv6b34OcmHVeaY=",
            desc: "Sweet cheese pastry served with warm bread and syrup.",
        },
    ];

    const [likes, setLikes] = useState(() => {
        try {
            const saved = localStorage.getItem("food_likes");
            return saved ? JSON.parse(saved) : {};
        } catch {
            return {};
        }
    });

    useEffect(() => {
        localStorage.setItem("food_likes", JSON.stringify(likes));
    }, [likes]);

    const likeFood = (name) => {
        setLikes((previous) => ({
            ...previous,
            [name]: (previous[name] || 0) + 1,
        }));
    };

    return (
        <section className="container">
            <h1 className="title">Taste Lebanon</h1>

            <p className="page-subtitle">
                Discover the flavors and traditional dishes of Lebanese cuisine.
            </p>

            <div className="grid">
                {foods.map((food) => (
                    <div className="card" key={food.name}>
                        <img src={food.img} alt={food.name} />

                        <div className="card-content">
                            <h3>{food.name}</h3>
                            <p>{food.desc}</p>

                            <button
                                className="btn like-btn"
                                onClick={() => likeFood(food.name)}
                            >
                                ❤️ {likes[food.name] || 0} Likes
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Food;