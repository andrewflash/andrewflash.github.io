
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail, User } from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import '../styles/Hero.css';

// Image located in public/profile.png
const profileImg = '/profile.png';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg">
                <NetworkBackground />
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="hero-title">
                            Hi, I'm <span className="text-gradient">Andri Rahmadhani</span>
                        </h1>

                        <p className="hero-subtitle">
                            <span className="text-white font-medium">R&D IoT and Embedded Systems</span> specialized in <span className="highlight">Advanced Wireless Protocols</span> (WiFi, Bluetooth&reg;, LoRa, Zigbee, Thread, Mesh, GSM) and <span className="highlight">Industrial IoT Infrastructure</span>.
                        </p>

                        <div className="hero-actions">
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="btn-primary"
                            >
                                View Projects <ArrowRight size={18} />
                            </Link>

                            <a
                                href="#contact"
                                className="btn-secondary"
                            >
                                Contact Me <Mail size={18} />
                            </a>
                        </div>

                        <div className="hero-socials">
                            <a href="https://github.com/andrewflash" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Github size={28} />
                            </a>
                            <a href="https://id.linkedin.com/in/andrirahmadhani" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Linkedin size={28} />
                            </a>
                            <a href="mailto:andrewflash@gmail.com" className="social-link">
                                <Mail size={28} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="profile-img-wrapper">
                        <div className="profile-img-border"></div>
                        {profileImg ? (
                            <img src={profileImg} alt="Andri Rahmadhani" className="profile-img" />
                        ) : (
                            <div className="profile-img profile-placeholder">
                                <User size={100} strokeWidth={1} />
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
