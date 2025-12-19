import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Bookmark, Lightbulb } from 'lucide-react';
import '../styles/Research.css';

const Research = () => {
    const publications = [
        {
            title: "Signal comparison of developed EEG device and emotiv insight based on brainwave characteristics analysis",
            venue: "Journal of Physics: Conference Series",
            desc: "Comparison of the signal acquired by the developed EEG device using Emotiv Insight device as a benchmark.",
            link: "https://iopscience.iop.org/article/10.1088/1742-6596/1505/1/012071",
            year: 2020,
            authors: "S.H. Pratama, A. Rahmadhani, A. Bramana, P. Oktivasari, N. Handayani, F. Haryanto, S.N. Khotimah"
        },
        {
            title: "The development of Arduino-based low-cost wireless modular device for brainwave acquisition",
            venue: "Journal of Physics: Conference Series",
            desc: "Development of a low-cost wireless modular device for brainwave acquisition based on Arduino microcontroller",
            link: "https://iopscience.iop.org/article/10.1088/1742-6596/1248/1/012035",
            year: 2019,
            authors: "S.H. Pratama, A. Rahmadhani, A. Bramana, P. Oktivasari, N. Handayani, F. Haryanto, S.N. Khotimah"
        },
        {
            title: "LoRaWAN as secondary telemetry communication system for drone delivery",
            venue: "IEEE International Conference on Internet of Things and Intelligence System (IOTAIS)",
            desc: "Evaluation of the limits of LoRaWAN as a secondary communication mode for drone delivery system",
            link: "https://ieeexplore.ieee.org/document/8600892",
            year: 2018,
            authors: "A. Rahmadhani, R. Isswandhana, A. Giovani, R.A. Syah"
        },
        {
            title: "When LoRaWAN frames collide",
            venue: "International Workshop on Wireless Network Testbeds, Experimental Evaluation & Characterization (WiNTECH)",
            desc: "Analysis of collision behavior in LoRaWAN networks, providing insights into scalability limits.",
            link: "https://dl.acm.org/doi/abs/10.1145/3267204.3267212",
            year: 2018,
            authors: "A. Rahmadhani, F. Kuipers"
        },
        {
            title: "Fabrication and Characterization of Photodiode Flame Distance Sensor",
            venue: "Instrumentasi 39 (1), 37-43",
            desc: "Development of a new prototype for a simple, low-cost flame sensing device using a photodiode",
            link: "https://scholar.google.com/scholar?cluster=7724165562386038380&hl=en&oi=scholarr",
            year: 2016,
            authors: "A.R. Nugraha, A. Rahmadhani"
        },
        {
            title: "Complex network analysis of conventional and Islamic stock market in Indonesia",
            venue: "AIP Conference Proceedings 1677 (1), 080010",
            desc: "This study utilizes complex network analysis and Random Matrix Theory (RMT) to compare the conventional and Islamic stock markets in Indonesia based on cross-correlation matrix of logarithmic price returns.",
            link: "https://pubs.aip.org/aip/acp/article-abstract/1677/1/080010/587441/Complex-network-analysis-of-conventional-and",
            year: 2015,
            authors: "A. Rahmadhani, A. Purqon, S. Kim, S.Y. Kim"
        },
        {
            title: "Web-based surface level measuring system employing ultrasonic sensors and GSM/GPRS-based communication",
            venue: "Applied Mechanics and Materials 771, 92-95",
            desc: "Development of a real-time web-based water surface level monitoring system using ultrasonic sensors and GSM/GPRS for flood early warning.",
            link: "https://www.scientific.net/AMM.771.92",
            year: 2015,
            authors: "M.M. Munir, R.A. Salam, E. Widiatmoko, Y. Supriadani, A. Rahmadhani, H. Latief, K. Khairurrijal"
        },
        {
            title: "Prediksi pergerakan kurva harga saham dengan metode simple moving average menggunakan C++ dan Qt Creator",
            venue: "Prosiding Seminar Kontribusi Fisika",
            desc: "Pembuatan program sederhana menggunakan metode simple moving average (SMA) berbasis C++ (Qt Creator) untuk prediksi harga saham.",
            link: "https://d1wqtxts1xzle7.cloudfront.net/70969583/Prediksi_Pergerakan_Kurva_Harga_Saham_de20211002-31294-15pkusl.pdf?1738430813=&response-content-disposition=inline%3B+filename%3DPrediksi_Pergerakan_Kurva_Harga_Saham_de.pdf&Expires=1766123688&Signature=PQqk2TomseJotzIvSTE60mlcCVtAAspnAkVlFzZePTrgIlNyMvIOsyMCZCusp~r-QPUw3vj7P3tk4Qqb2Z-rqe4AIITrzsgDot69Fy8eMk4YVCsr0xxM2GQQU~PNfAQ1CppTIr51dXNSH~SAgQvSR27C1HLDJL49LEK7w-eIHTvCml5m--hmvJzY3naoYEB7HIrQ7Z0RGAIz7L3e643eRS0c0lyxbbiRrmVKugOm3E3TP-s3abRNwx9m7yeTo5qDMT~WJ5ciSDrQMDnjWiE~ACg4kvsH5q8RInAXU1KkqafSjFPM1DZufgmFPTOPh4EV3VP2l~jaldz-BggJUCUpzw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
            year: 2011,
            authors: "A. Rahmadhani, M. Mandela, T. Paul, S. Viridi"
        }
    ].sort((a, b) => b.year - a.year);

    return (
        <section id="research" className="section bg-secondary">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="research-focus-summary"
                >
                    <div className="focus-card">
                        <h3 className="focus-title">
                            <Lightbulb size={24} className="text-yellow-400" style={{ filter: "drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))" }} />
                            Research Focus
                        </h3>
                        <p className="focus-text">
                            Specialized in <strong>Large-scale LoRaWAN networks</strong>, <strong>collision analysis</strong>, and <strong>low-power wireless communication protocols</strong> for telemetry and sensing applications. My academic work bridges the gap between theoretical network modeling and practical industrial implementation.
                        </p>
                    </div>
                </motion.div>

                <div className="research-list">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="research-item"
                        >
                            <div className="research-content">
                                <h3 className="research-title">
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="title-link">
                                        {pub.title}
                                    </a>
                                </h3>
                                <div className="research-meta">
                                    <span className="research-authors">{pub.authors}</span>
                                    <span className="separator">•</span>
                                    <span className="research-venue">{pub.venue}</span>
                                    <span className="separator">•</span>
                                    <span className="research-year">{pub.year}</span>
                                </div>
                                <p className="research-desc">{pub.desc}</p>
                            </div>
                            <div className="research-action">
                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
