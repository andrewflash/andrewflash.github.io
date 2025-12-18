import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `${formData.message}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`;
        window.location.href = `mailto:andrewflash@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-container">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-badge">Get in touch</span>
                        <h2 className="contact-info-title">Let's work together</h2>
                        <p className="contact-info-desc">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="contact-links">
                            <a href="mailto:andrewflash@gmail.com" className="contact-item group">
                                <div className="icon-box">
                                    <Mail size={24} className="icon-contact" />
                                </div>
                                <span>andrewflash@gmail.com</span>
                            </a>

                            <a href="https://linkedin.com/in/andrirahmadhani" target="_blank" rel="noopener noreferrer" className="contact-item group">
                                <div className="icon-box">
                                    <Linkedin size={24} className="icon-contact" />
                                </div>
                                <span>Andrew Flash</span>
                            </a>

                            <div className="contact-item group">
                                <div className="icon-box">
                                    <MapPin size={24} className="icon-contact" />
                                </div>
                                <span>Available Globally (Remote/Relocation)</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: '2rem' }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="form-textarea"
                                    placeholder="Start a conversation..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-submit">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="footer">
                    <p>© {new Date().getFullYear()} Andri Rahmadhani. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="https://github.com/andrewflash" className="footer-link">GitHub</a>
                        <a href="https://id.linkedin.com/in/andrirahmadhani" className="footer-link">LinkedIn</a>
                        <a href="#" className="footer-link">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
