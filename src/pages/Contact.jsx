import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
    const location = useLocation();
    const [status, setStatus] = useState("");
    const [error, setError] = useState(false);
    const [messageText, setMessageText] = useState("");
    const [subject, setSubject] = useState("General Inquiry");

    useEffect(() => {
        if (location.state?.selectedOffer) {
            setMessageText(`Hello, I would like to book the "${location.state.selectedOffer}" package.`);
            setSubject("Booking & Reservation");
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = messageText.trim();

        if (name.length < 3) {
            setError(true);
            setStatus("Name must be at least 3 characters.");
            return;
        }
        if (!email.includes("@")) {
            setError(true);
            setStatus("Please enter a valid email address.");
            return;
        }
        if (message.length < 10) {
            setError(true);
            setStatus("Message must be at least 10 characters.");
            return;
        }

        setError(false);
        setStatus("Thank you! Your message has been sent successfully.");
        e.target.reset();
        setMessageText("");
        setSubject("General Inquiry");
    };

    return (
        <section className="container">
            <h1 className="title">Get In Touch</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "start" }}>

                { }
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="card" style={{ padding: "24px" }}>
                        <h3>📍 Office Location</h3>
                        <p style={{ marginTop: "8px" }}>Beirut Digital District, Lebanon</p>
                    </div>
                    <div className="card" style={{ padding: "24px" }}>
                        <h3>📞 Phone & Email</h3>
                        <p style={{ marginTop: "8px" }}>+961 1 234 567<br />support@explorelebanon.com</p>
                    </div>
                    <div className="card" style={{ padding: "24px" }}>
                        <h3>⏰ Working Hours</h3>
                        <p style={{ marginTop: "8px" }}>Mon - Fri: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                </div>

                { }
                <div>
                    <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: "100%" }}>
                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "14px" }}>Subject / Inquiry Type:</label>
                        <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="search"
                            style={{ marginBottom: "16px", cursor: "pointer" }}
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Booking & Reservation">Booking & Reservation</option>
                            <option value="Feedback & Review">Feedback & Review</option>
                        </select>

                        <input name="name" type="text" placeholder="Full Name" required />
                        <input name="email" type="email" placeholder="Email Address" required />

                        <textarea
                            name="message"
                            placeholder="Your Message or Booking Details"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            required
                        ></textarea>

                        <button type="submit" className="btn" style={{ width: "100%" }}>Send Message</button>
                    </form>

                    {status && (
                        <p style={{ textAlign: "center", marginTop: "20px", color: error ? "#ef4444" : "#22c55e", fontWeight: "600" }}>
                            {status}
                        </p>
                    )}
                </div>

            </div>
        </section>
    );
}

export default Contact;