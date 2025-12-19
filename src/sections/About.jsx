import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import '../styles/About.css';

const About = () => {

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
                            I am a <span className="font-medium text-primary">Head of R&D IoT Hardware and Connectivity</span> and <span className="font-medium text-primary">Technical Lead</span> with over <span className="text-highlight">10+ years</span> of experience in building large-scale connected systems.
                        </p>
                        <p className="text-lead">
                            Currently leading engineering at <span className="text-highlight">Miota</span>, I architect solutions that bridge the gap between low-level hardware constraints and high-availability cloud infrastructure. My expertise spans from designing custom <span className="text-highlight">WiFi HaLow</span> mesh networks to deploying industrial safety systems powered by <span className="text-highlight">Sensor Fusion</span>.
                        </p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="right-column"
                    >
                        <div className="about-quote" style={{ marginTop: 0, marginBottom: '0' }}>
                            "Connecting the unconnected is my craft. With firmware precision and scalable architecture, I bridge the gap between physical hardware and digital intelligence."
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
