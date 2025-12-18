import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Bookmark } from 'lucide-react';
import '../styles/Research.css';

const Research = () => {
    const publications = [
        {
            title: "Signal comparison of developed EEG device and emotiv insight based on brainwave characteristics analysis",
            venue: "Journal of Physics: Conference Series 1505 (1), 012071",
            desc: "Comparison of the signal acquired by the developed EEG device using Emotiv Insight device as a benchmark.",
            link: "https://iopscience.iop.org/article/10.1088/1742-6596/1505/1/012071",
            year: 2020
        },
        {
            title: "The development of Arduino-based low-cost wireless modular device for brainwave acquisition",
            venue: "Journal of Physics: Conference Series 1248 (1), 012035",
            desc: "Development of a low-cost wireless modular device for brainwave acquisition based on Arduino microcontroller",
            link: "https://iopscience.iop.org/article/10.1088/1742-6596/1248/1/012035",
            year: 2019
        },
        {
            title: "LoRaWAN as secondary telemetry communication system for drone delivery",
            venue: "2018 IEEE International Conference on Internet of Things and Intelligence System (IOTAIS)",
            desc: "Evaluation of the limits of LoRaWAN as a secondary communication mode for drone delivery system",
            link: "https://ieeexplore.ieee.org/document/8626796",
            year: 2018
        },
        {
            title: "When LoRaWAN frames collide",
            venue: "Proceedings of the 12th International Workshop on Wireless Network Testbeds, Experimental Evaluation & Characterization",
            desc: "Analysis of collision behavior in LoRaWAN networks, providing insights into scalability limits.",
            link: "https://dl.acm.org/doi/abs/10.1145/3267204.3267212",
            year: 2018
        }
    ].sort((a, b) => b.year - a.year);

    return (
        <section id="research" className="section">
            <div className="bg-glow"></div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="section-badge">Academics</span>
                    <h2 className="section-title">Research & Publications</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="research-grid">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card research-card"
                        >
                            <div className="card-header">
                                <FileText className="icon-file" size={32} />
                                <a href={pub.link} className="icon-link">
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <h3 className="research-title">
                                {pub.title}
                            </h3>

                            <div className="research-venue">
                                <Bookmark size={14} className="text-highlight" />
                                <span className="venue-text">{pub.venue}</span>
                            </div>

                            <p className="research-desc">
                                {pub.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
