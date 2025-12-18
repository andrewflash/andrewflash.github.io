import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Head of R&D IoT Hardware and Connectivity",
            company: "Miota",
            period: "2023 - Present",
            location: "Jakarta, Indonesia (Hybrid)",
            desc: "Leading engineering division for end-to-end IoT solutions. Architecting mass-scale deployments for utilities and industrial safety.",
            technologies: ["WiFi HaLow", "Satellite IoT", "Biometrics", "Embedded Linux", "Team Leadership"],
            highlights: [
                "Achieved 3x coverage vs conventional mesh using WiFi HaLow for smart metering.",
                "Implemented direct-to-satellite IoT monitoring (Starlink) for remote industrial assets.",
                "Developed high-precision Bridge Collision Avoidance System using sensor fusion (LiDAR, Water Current).",
                "Built Palm Secure IR/Optical vein recognition systems for high-security access control."
            ]
        },
        {
            role: "Solutions Architect & Technical Lead",
            company: "PT. NTT Indonesia Technology",
            period: "2019 - 2023",
            location: "Jakarta, Indonesia",
            desc: "Led pre-sales activities for large-scale Smart City and Enterprise IoT solutions.",
            technologies: ["Computer Vision", "Smart City", "Data Analytics", "System Architecture"],
            highlights: [
                "Led design of Smart Traffic Systems using CCTV analytics for vehicle counting & congestion prediction.",
                "Architected unified dashboard solutions for city-wide sensor networks.",
            ]
        },
        {
            role: "Embedded System Engineer",
            company: "Bukalapak",
            period: "2018 - 2019",
            location: "Jakarta, Indonesia",
            desc: "Developed hardware-software integration for logistics automation and fintech kiosks.",
            technologies: ["Robotics (AGV)", "Raspberry Pi", "OpenCV", "Edge AI", "MQTT"],
            highlights: [
                "Developed Automated Guided Vehicles (AGV) with QR-navigation for warehouse automation.",
                "Built AI-assisted smart cameras for localized object detection using Raspberry Pi & OpenCV.",
                "Integrated hardware control for bill acceptors in fintech kiosk machines."
            ]
        },
        {
            role: "Software Engineer",
            company: "Wirecard",
            period: "2018",
            location: "Jakarta, Indonesia",
            desc: "Firmware development for secure payment terminals.",
            technologies: ["Embedded C/C++", "EMV Level 1/2", "PCI-DSS", "Verifone OS"],
            highlights: [
                "Developed secure firmware for EDC/POS terminals.",
                "Ensured compliance with EMV and PCI-DSS security standards for financial transactions."
            ]
        }
    ];

    return (
        <section id="experience" className="section bg-secondary-dark">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="section-badge">Career Path</span>
                    <h2 className="section-title">Professional Experience</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="experience-timeline">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-dot"></div>
                            <div className="glass-card experience-card">
                                <div className="exp-header">
                                    <div className="exp-role-group">
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <h4 className="exp-company">{exp.company}</h4>
                                    </div>
                                    <div className="exp-meta">
                                        <span className="exp-date">
                                            <Calendar size={14} className="mr-1" /> {exp.period}
                                        </span>
                                        <span className="exp-loc">
                                            <MapPin size={14} className="mr-1" /> {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="exp-desc">{exp.desc}</p>

                                <ul className="exp-highlights">
                                    {exp.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="exp-tech-stack">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="exp-tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
