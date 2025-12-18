import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Star, GitFork } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Bridge Collision Avoidance System",
            desc: "Industrial safety system using sensor fusion (LiDAR, Water Current) to prevent vessel collisions with critical bridge infrastructure.",
            tags: ["Sensor Fusion", "LiDAR", "Industrial IoT"],
            stars: 24,
            forks: 5,
            link: "https://github.com/andrewflash" // Placeholder as private repo likely
        },
        {
            title: "Palm Secure Biometric Device",
            desc: "High-security access control system utilizing IR/Optical vein recognition technology with anti-spoofing mechanism.",
            tags: ["Biometrics", "Embedded C++", "Hardware Design"],
            stars: 18,
            forks: 3,
            link: "https://github.com/andrewflash"
        },
        {
            title: "Smart Traffic Analytics System",
            desc: "City-wide traffic monitoring system using Computer Vision for vehicle classification, counting, and congestion prediction.",
            tags: ["Computer Vision", "Python", "Smart City"],
            stars: 32,
            forks: 8,
            link: "https://github.com/andrewflash"
        },
        {
            title: "WiFi HaLow Mesh Network",
            desc: "Custom mesh networking protocol implementation for IEEE 802.11ah (WiFi HaLow) to extend range for smart metering.",
            tags: ["WiFi HaLow", "Networking", "C/C++"],
            stars: 15,
            forks: 4,
            link: "https://github.com/andrewflash"
        },
        {
            title: "Satellite IoT Monitor",
            desc: "Direct-to-satellite monitoring system using Starlink integration for remote industrial asset tracking.",
            tags: ["Satellite", "IoT", "Starlink"],
            stars: 12,
            forks: 2,
            link: "https://github.com/andrewflash"
        }
    ];

    return (
        <section id="projects" className="section bg-secondary-dark">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="section-badge">Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="section-line mx-auto"></div>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card project-card"
                        >
                            <div className="project-header">
                                <Folder className="folder-icon" size={40} />
                                <div className="project-links">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">
                                {project.desc}
                            </p>

                            <div className="tags-container">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="project-stats">
                                <span className="stat-item"><Star size={14} /> {project.stars}</span>
                                <span className="stat-item"><GitFork size={14} /> {project.forks}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="view-more-container">
                    <a
                        href="https://github.com/andrewflash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                    >
                        View More on GitHub <Github size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
