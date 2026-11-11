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
            setMessageText(
                `Hello, I am interested in the "${location.state.selectedOffer}" package.`
            );
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

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
        setStatus(
            "Your form has been validated successfully! Thank you."
        );

        e.target.reset();
        setMessageText("");
        setSubject("General Inquiry");
    };

    return (
        <section className="container">
            <h1 className="title">Get In Touch</h1>

            <p className="page-subtitle">
                Have a question or want to know more? Send us a message.
            </p>

            <div className="contact-layout">
                <div className="contact-info">
                    <div className="card info-box">
                        <h3>📍 Office Location</h3>
                        <p>Beirut Digital District, Lebanon</p>
                    </div>

                    <div className="card info-box">
                        <h3>📞 Phone & Email</h3>
                        <p>
                            +961 1 234 567
                            <br />
                            support@explorelebanon.com
                        </p>
                    </div>

                    <div className="card info-box">
                        <h3>⏰ Working Hours</h3>
                        <p>
                            Mon - Fri: 9:00 AM - 6:00 PM
                            <br />
                            Saturday: 9:00 AM - 2:00 PM
                        </p>
                    </div>
                </div>

                <div>
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="subject">Subject / Inquiry Type</label>

                        <select
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Booking & Reservation">
                                Booking & Reservation
                            </option>
                            <option value="Feedback & Review">
                                Feedback & Review
                            </option>
                        </select>

                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message or Booking Details"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            required
                        />

                        <button type="submit" className="btn">
                            Send Message
                        </button>
                    </form>

                    {status && (
                        <p className={`form-status ${error ? "error" : "success"}`}>
                            {status}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;