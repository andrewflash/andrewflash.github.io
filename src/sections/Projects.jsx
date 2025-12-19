import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ArrowUpRight, Calendar } from 'lucide-react';
import '../styles/Projects.css';

const projectsRaw = [
    {
        title: "Bridge Collision Avoidance System",
        client: "Miota",
        desc: "Industrial safety system using sensor fusion (LiDAR, Water Current) to prevent vessel collisions.",
        details: "Designed and implemented a high-reliability safety system for bridge infrastructure protection. The system integrates multiple sensor inputs including LiDAR for object detection and water current sensors for environmental monitoring. Key achievements include developing a custom sensor fusion algorithm that reduced false positives by 40% and deploying the system in a harsh marine environment with 99.9% uptime.",
        tags: ["Sensor Fusion", "LiDAR", "Industrial IoT"],
        type: "Industrial IoT",
        date: "2024-02",
        link: "https://github.com/andrewflash", // Placeholder if no specific link
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Palm Secure Biometric Device",
        client: "PalmVB",
        desc: "High-security access control system utilizing IR/Optical vein recognition technology.",
        details: "Led the firmware development for a next-generation biometric access control device. Implemented secure boot and encrypted storage for sensitive biometric data. The system features a custom optical engine driver and advanced anti-spoofing algorithms that detect liveness through vein pattern analysis, achieving a False Acceptance Rate (FAR) of less than 0.0001%.",
        tags: ["Biometrics", "Embedded C++", "Hardware Design"],
        type: "Biometrics",
        date: "2023-11",
        link: "https://palmvb.com",
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Smart Traffic Analytics System",
        client: "NTT",
        desc: "City-wide traffic monitoring system using Computer Vision for congestion prediction.",
        details: "Architected a scalable traffic analytics platform deploying edge AI on NVIDIA Jetson devices. The system processes video streams in real-time to classify vehicles and detect traffic violations. Cloud integration provides city planners with actionable insights through a dashboard visualizing congestion patterns and predicting peak traffic hours.",
        tags: ["Computer Vision", "Python", "Smart City"],
        type: "AI / Smart City",
        date: "2023-08",
        link: "https://github.com/andrewflash",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "WiFi HaLow Mesh Network",
        client: "Miota",
        desc: "Custom mesh networking protocol implementation for IEEE 802.11ah to extend range.",
        details: "Developed a robust mesh networking stack for the emerging WiFi HaLow standard (IEEE 802.11ah). This project focused on extending coverage for smart metering applications in dense urban environments. Implemented a custom routing protocol that optimizes for low power consumption and high reliability, achieving multi-hop communication over several kilometers.",
        tags: ["WiFi HaLow", "Networking", "C/C++"],
        type: "Networking",
        date: "2024-06",
        link: "https://github.com/andrewflash/luckfox-pico-halow",
        repo: "andrewflash/luckfox-pico-halow",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Satellite IoT Monitor",
        client: "Miota",
        desc: "Direct-to-satellite monitoring system using Starlink integration for remote assets.",
        details: "Created a prototype for remote asset monitoring using direct-to-satellite communication. Integrated disparate industrial protocols (Modbus, CAN) into a unified gateway that transmits critical health data via Starlink. Reduced data usage by 90% through intelligent edge processing and delta compression algorithms.",
        tags: ["Satellite", "IoT", "Starlink"],
        type: "Satellite IoT",
        date: "2024-01",
        link: "https://github.com/andrewflash",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    }
];

const projects = projectsRaw.sort((a, b) => new Date(b.date) - new Date(a.date));

const ProjectRow = ({ project, index, isOpen, onToggle }) => {
    const year = project.date.split('-')[0];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`project-row ${isOpen ? 'active' : ''}`}
        >
            {/* Header Row Content */}
            <div
                onClick={onToggle}
                className="project-row-summary"
            >
                {/* Year */}
                <div className="col-year">
                    {year}
                </div>

                {/* Client */}
                <div className="col-client">
                    {project.client}
                </div>

                {/* Project Title */}
                <div className="col-title">
                    {project.title}
                </div>

                {/* Type/Service */}
                <div className="col-type">
                    {project.type}
                </div>

                {/* Action Icon */}
                <div className="col-action">
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="project-row-expanded"
                    >
                        <div className="expanded-inner">
                            {/* Main Content */}
                            <div className="expanded-content">
                                <div className="expanded-grid">
                                    {/* Left: Description & Details */}
                                    <div className="expanded-info">
                                        <p className="project-description">
                                            {project.details || project.desc}
                                        </p>

                                        <div className="project-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="tag-badge">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Meta & Actions */}
                                    <div className="expanded-meta">
                                        {/* Mobile-only Year display in expanded view */}
                                        <div className="mobile-meta">
                                            <Calendar size={14} />
                                            <span>{project.date}</span>
                                        </div>

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-image"
                                        />

                                        <div className="project-actions">
                                            {project.repo && (
                                                <a
                                                    href={`https://github.com/${project.repo}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="action-link"
                                                >
                                                    <Github size={16} />
                                                    <span>Source Code</span>
                                                </a>
                                            )}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="action-link"
                                            >
                                                <ArrowUpRight size={16} />
                                                <span>View Project</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Projects = () => {
    const [openIndex, setOpenIndex] = useState(0); // Default open the first one

    return (
        <section id="projects" className="section bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="projects-header"
                >
                    <span className="section-badge">Portfolio</span>
                    <h2 className="section-title">Selected Works</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">
                        A collection of projects focusing on embedded systems, IoT infrastructure, and AI integration for enterprise clients.
                    </p>
                </motion.div>

                {/* Table Header - Desktop Only */}
                <div className="projects-table-header">
                    <div className="col-year">Year</div>
                    <div className="col-client">Client</div>
                    <div className="col-title">Project</div>
                    <div className="col-type">Domain</div>
                    <div className="col-action text-right">More</div>
                </div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <ProjectRow
                            key={index}
                            index={index}
                            project={project}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Projects;

