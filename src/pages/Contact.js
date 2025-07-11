import React, { useState } from "react";


const Contact = () => {
    const [formData, setFormData] = useState({ name: "",country:"",favoriteplayer:"", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! Thank you.");
        setFormData({ name: "",country: "" ,favoriteplayer:"" ,email: "", message: "" });
    };

    return (
        <div className="contact-page">
            <h2>Contact Manchester United</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Your Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="favorite player"
                    placeholder="Your Favorite Player"
                    value={formData.favoriteplayer}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;