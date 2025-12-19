import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, GraduationCap, Award } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    const education = [
        {
            degree: "M.Sc. in Embedded Systems",
            school: "TU Delft (Delft University of Technology)",
            year: "2017",
            desc: "Thesis: Performance evaluation of LoRaWAN: From small-scale to large-scale networks."
        },
        {
            degree: "B.Sc. in Physics",
            school: "Bandung Institute of Technology (ITB)",
            year: "2013",
            desc: "Thesis: Development of Portable Wireless Electroencephalograph (EEG) Acquisition System."
        }
    ];

    const skills = [
        "C/C++", "Python", "React", "Embedded Linux",
        "LoRaWAN", "IoT Protocols", "Wireless Networking",
        "System Architecture", "Git", "Docker"
    ];

    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-badge">Introduction</span>
                    <h2 className="section-title">About Me</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >

                        <p className="text-lead">
                            I am a <span className="text-white font-medium">Head of R&D IoT Hardware and Connectivity</span> and <span className="text-white font-medium">Technical Lead</span> with over <span className="text-highlight">10+ years</span> of experience in building large-scale connected systems.
                        </p>
                        <p className="text-lead">
                            Currently leading engineering at <span className="text-highlight">Miota</span>, I architect solutions that bridge the gap between low-level hardware constraints and high-availability cloud infrastructure. My expertise spans from designing custom <span className="text-highlight">WiFi HaLow</span> mesh networks to deploying industrial safety systems powered by <span className="text-highlight">Sensor Fusion</span>.
                        </p>

                        <div className="skills-section">
                            <h3 className="skills-title">
                                <Code className="text-highlight" size={20} /> Technical Arsenal
                            </h3>

                            <div className="skills-category">
                                <h4 className="skills-subtitle">Wireless & IoT Protocols</h4>
                                <div className="skills-grid">
                                    {["LoRaWAN", "WiFi HaLow", "Zigbee", "BLE", "MQTT", "CoAP", "Thread/Matter", "Mesh"].map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skills-category mt-4">
                                <h4 className="skills-subtitle">Firmware & OS</h4>
                                <div className="skills-grid">
                                    {["C/C++", "Python", "Embedded Linux", "Zephyr RTOS", "OpenWRT", "FreeRTOS"].map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skills-category mt-4">
                                <h4 className="skills-subtitle">Hardware & Platforms</h4>
                                <div className="skills-grid">
                                    {["ESP32", "STM32", "Nordic nRF", "Raspberry Pi", "Altium", "KiCad"].map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="right-column"
                    >
                        <h3 className="edu-title">
                            <GraduationCap className="text-highlight" size={20} /> Education
                        </h3>

                        {education.map((edu, index) => (
                            <div key={index} className="glass-card edu-card group">
                                <div className="edu-icon-bg">
                                    <BookOpen size={100} />
                                </div>
                                <div className="edu-header">
                                    <h4 className="edu-degree">{edu.degree}</h4>
                                    <span className="edu-year">{edu.year}</span>
                                </div>
                                <p className="edu-school">{edu.school}</p>
                                <p className="edu-desc">{edu.desc}</p>
                            </div>
                        ))}

                        <div className="glass-card research-focus">
                            <h4 className="research-title">
                                <Award size={20} className="text-highlight" /> Research Focus
                            </h4>
                            <p className="text-secondary text-sm leading-relaxed">
                                Specialized in Large-scale LoRaWAN networks, collision analysis, and low-power wireless communication protocols for telemetry and sensing applications.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
