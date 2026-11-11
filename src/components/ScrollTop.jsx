import { useEffect, useState } from "react";

function ScrollTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {show && (
                <button
                    className="scroll-btn"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    );
}

export default ScrollTop;