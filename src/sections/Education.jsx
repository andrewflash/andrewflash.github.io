import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import '../styles/Education.css';

const Education = () => {
    const education = [
        {
            degree: "M.Sc. in Embedded Systems",
            school: "TU Delft (Delft University of Technology)",
            year: "2017",
            desc: "Thesis: Performance evaluation of LoRaWAN: From small-scale to large-scale networks.",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Delft_University_of_Technology_logo.svg"
        },
        {
            degree: "B.Sc. in Physics",
            school: "Bandung Institute of Technology (ITB)",
            year: "2013",
            desc: "Thesis: Development of Portable Wireless Electroencephalograph (EEG) Acquisition System.",
            logo: "https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png"
        }
    ];

    return (
        <section id="education" className="section bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-badge">Academic Background</span>
                    <h2 className="section-title">Education</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card edu-card group"
                        >
                            <div className="edu-logo-bg">
                                <img
                                    src={edu.logo}
                                    alt=""
                                    className="edu-bg-logo"
                                />
                            </div>
                            <div className="edu-header">
                                <h4 className="edu-degree">{edu.degree}</h4>
                                <span className="edu-year">{edu.year}</span>
                            </div>
                            <p className="edu-school">{edu.school}</p>
                            <p className="edu-desc">{edu.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
