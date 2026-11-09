import { useState, useEffect } from "react";

function DarkMode() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("darkMode", dark);
    }, [dark]);

    return (
        <button className="nav-dark-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}

export default DarkMode;