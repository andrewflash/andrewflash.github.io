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
            desc: "Leading the engineering division to architect end-to-end IoT solutions for mass-scale deployments in utilities and industrial safety. Key achievements include deploying a WiFi HaLow mesh network delivering 3x coverage compared to conventional systems, implementing direct-to-satellite monitoring for remote assets via Starlink, and developing a high-precision Bridge Collision Avoidance System using multi-sensor fusion (LiDAR, Water Current).",
            technologies: ["WiFi HaLow", "Satellite IoT", "Biometrics", "Embedded Linux", "Team Leadership"]
        },
        {
            role: "Solutions Architect & Technical Lead",
            company: "NTT Indonesia Technology",
            period: "2019 - 2023",
            location: "Jakarta, Indonesia",
            desc: "Led technical pre-sales and solution architecture for large-scale Smart City and Enterprise IoT projects. Designed comprehensive Smart Traffic Systems utilizing CCTV analytics for real-time congestion prediction and vehicle counting, and architected unified dashboards for city-wide sensor networks to enhance urban management efficiency.",
            technologies: ["Computer Vision", "Smart City", "Data Analytics", "System Architecture"]
        },
        {
            role: "Embedded System Engineer",
            company: "Bukalapak",
            period: "2018 - 2019",
            location: "Jakarta, Indonesia",
            desc: "Engineered hardware-software integration for logistics automation and fintech infrastructure. Notable contributions include developing QR-navigated Automated Guided Vehicles (AGVs) to optimize warehouse operations and building AI-assisted smart cameras on Raspberry Pi for localized object detection and analytics.",
            technologies: ["Robotics (AGV)", "Raspberry Pi", "OpenCV", "Edge AI", "MQTT"]
        },
        {
            role: "Software Engineer",
            company: "Wirecard",
            period: "2018",
            location: "Jakarta, Indonesia",
            desc: "Developed secure firmware for EMV-compliant payment terminals (EDC/POS), ensuring strict adherence to PCI-DSS security standards for financial transactions and robust device communication protocols.",
            technologies: ["Embedded C/C++", "EMV Level 1/2", "PCI-DSS", "Verifone OS"]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-badge">Career Path</span>
                    <h2 className="section-title">Professional Experience</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="experience-timeline">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0, x: "-50%" }}
                                whileInView={{ opacity: 1, scale: 1, x: "-50%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="timeline-dot"
                            />
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card experience-card"
                            >
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

                                <p className="exp-desc leading-relaxed text-slate-300 mb-6">
                                    {exp.desc}
                                </p>

                                <div className="exp-tech-stack">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="exp-tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
