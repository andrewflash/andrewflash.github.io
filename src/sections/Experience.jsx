import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Head of R&D IoT Hardware and Connectivity",
            company: "Miota",
            period: "2024 - Present",
            location: "Jakarta, Indonesia (Hybrid)",
            logo: "/logos/miota.svg",
            fallback: "https://ui-avatars.com/api/?name=Miota&background=0D8ABC&color=fff",
            desc: "Leading the engineering division to architect end-to-end IoT solutions for mass-scale deployments in utilities and industrial safety. Pioneered Multi-PHY mesh networks using proprietary ESP-NOW and implemented secure, cost-efficient OTA device management across Modbus, CAN, and Mesh interfaces. Key achievements include deploying WiFi HaLow mesh networks, direct-to-satellite Starlink monitoring, and high-precision Bridge Collision Avoidance Systems.",
            technologies: ["WiFi HaLow", "ESP-NOW", "Multi-PHY Mesh", "Secure OTA", "Satellite IoT"]
        },
        {
            role: "Head of Technology (Consultant)",
            company: "PalmVB",
            period: "2024 - 2025",
            location: "Singapore (Remote)",
            logo: "/logos/palmvb.svg",
            fallback: "https://ui-avatars.com/api/?name=PalmVB&background=06B6D4&color=fff",
            desc: "Led the end-to-end development of biometric and IoT solutions, managing a multidisciplinary team to deliver over 4 product prototypes. Responsible for full-cycle development across hardware, firmware, and cloud architecture, I transformed early-stage ideas into scalable, secure systems ready for pilot deployment. Key achievements include designing robust biometric authentication platforms and IoT connectivity infrastructures for client sites.",
            technologies: ["Biometrics", "IoT", "Cloud Architecture", "Hardware Design", "Team Leadership"]
        },
        {
            role: "Solutions Architect",
            company: "NTT Indonesia Technology",
            period: "2021 - 2024",
            location: "Jakarta, Indonesia",
            logo: "/logos/ntt.svg",
            fallback: "https://ui-avatars.com/api/?name=NTT&background=002088&color=fff",
            desc: "Led solution architecture and technical pre-sales, driving digital transformation across manufacturing, enterprise, and public sectors. Architected end-to-end solutions integrating network infrastructure, security, cloud, and applications to support business-as-usual operations. Key achievements include designing Smart City traffic systems with CCTV analytics and unified sensor dashboards.",
            technologies: ["Smart City", "Cloud & Security", "Network Infrastructure", "System Architecture"]
        },
        {
            role: "Senior IoT Engineer",
            company: "Miota",
            period: "2019 - 2021",
            location: "Jakarta, Indonesia (Hybrid)",
            logo: "/logos/miota.svg",
            fallback: "https://ui-avatars.com/api/?name=Miota&background=0D8ABC&color=fff",
            desc: "Designed and architected end-to-end IoT solutions using LoRaWAN and RF Mesh, building a microservices-based network server supporting 50,000+ devices. Led the connectivity team in deploying 50,000 smart meters across Indonesia, managing RF certification (SDPPI) and customizing OpenWRT for 300+ gateways. Also developed GPS/GNSS asset tracking systems and reverse-engineered proprietary meter configurations for seamless integration.",
            technologies: ["LoRaWAN", "Microservices", "OpenWRT", "Smart Metering", "RF Mesh"]
        },
        {
            role: "Embedded System Engineer",
            company: "Bukalapak",
            period: "2018 - 2019",
            location: "Jakarta, Indonesia",
            logo: "/logos/bukalapak.svg",
            fallback: "https://ui-avatars.com/api/?name=Bukalapak&background=E31E2D&color=fff",
            desc: "Engineered hardware-software integration for logistics automation. Developed reliable backup connectivity for a drone delivery pilot using LoRa/LoRaWAN. Notable contributions include creating QR-navigated Automated Guided Vehicles (AGVs) to optimize warehouse operations and building AI-assisted smart cameras on Raspberry Pi for localized object detection.",
            technologies: ["Robotics (AGV)", "LoRaWAN", "UAV/Drone", "Raspberry Pi", "Edge AI"]
        },
        {
            role: "Software Engineer",
            company: "Wirecard",
            period: "2014 - 2015",
            location: "Jakarta, Indonesia",
            logo: "/logos/wirecard.svg",
            fallback: "https://ui-avatars.com/api/?name=Wirecard&background=040F22&color=fff",
            invertDark: true,
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
                    <div className="scroll-fade-overlay-top"></div>
                    <div className="experience-scroll-container">
                        <div className="experience-track">
                            <div className="timeline-line"></div>

                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0, x: "-50%" }}
                                        whileInView={{ opacity: 1, scale: 1, x: "-50%" }}
                                        viewport={{ once: true }} // Keep once: true, but maybe margin?
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
                                            <div className="exp-logo-container">
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className={`exp-logo ${exp.invertDark ? 'invert-dark' : ''}`}
                                                    onError={(e) => {
                                                        e.currentTarget.src = exp.fallback;
                                                        e.currentTarget.onerror = null;
                                                    }}
                                                />
                                            </div>
                                            <div className="exp-content-header">
                                                <div className="exp-role-group">
                                                    <h3 className="exp-role">{exp.role}</h3>
                                                    <h4 className="exp-company">{exp.company}</h4>
                                                </div>
                                                <div className="exp-meta">
                                                    <span className="exp-date">
                                                        <Calendar size={14} className="mr-1" />&nbsp;{exp.period}
                                                    </span>
                                                    <span className="exp-loc">
                                                        <MapPin size={14} className="mr-1" />&nbsp;{exp.location}
                                                    </span>
                                                </div>
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
                    <div className="scroll-fade-overlay"></div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
