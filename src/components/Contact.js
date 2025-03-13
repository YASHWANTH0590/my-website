import React, { useState } from "react";
import "./Contact.css";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:ganugapatiyaswanth@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <div>
            <div className="contact-container">
                <h1 className="contact-heading">📞 Get in <span className="highlight">Touch</span></h1>
                
                <p className="contact-description">
                    Feel free to reach out to me for any collaborations, projects, or just to say hello! 😊  
                    I'm always open to discussing new opportunities and innovative ideas. 🚀
                </p>

                <div className="contact-details">
                    <p><strong>📍 Location:</strong> Vijayawada, Andhra Pradesh, India.</p>
                    <p><strong>📧 Email:</strong> <a href="mailto:ganugapatiyaswanth@gmail.com">ganugapatiyaswanth@gmail.com</a></p>
                    <p><strong>📞 Phone:</strong> +91 6303073312</p>
                </div>

                <div className="social-links">
                    <a href="https://www.instagram.com/_yaswanth.05_?igsh=MXVwdHhqYmUzOWExaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon instagram" />
                    </a>
                    <a href="https://github.com/YASHWANTH0590" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon github" />
                    </a>
                    <a href="https://www.linkedin.com/in/gsd-yaswanth" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon linkedin" />
                    </a>

                    <a href="mailto:ganugapatiyaswanth@gmail.com">
                        <FaEnvelope className="social-icon email" />
                    </a>
                </div>
            </div>

            {/* Message Form Section */}
            <div className="message-form-container">
                <h2 className="message-form-heading">💬 Send Me a Message</h2>
                <form className="message-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
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
                        required 
                    />
                    <button type="submit">Send Message 📩</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
