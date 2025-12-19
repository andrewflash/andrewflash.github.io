import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Wireless & IoT Protocols",
            skills: [
                { name: "LoRaWAN", icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/LoRaWAN_Logo.svg" },
                { name: "WiFi", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/WiFi_Logo.svg" },
                { name: "Zigbee", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Zigbee_logo.svg" },
                { name: "BLE", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bluetooth_Figure_Mark_Logo.svg" },
                { name: "MQTT", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mqtt-hor.svg" },
                { name: "Thread", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Thread_Group_wordmark.svg" },
                { name: "Matter", icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_of_Matter_connectivity_standard.svg" },
                { name: "Mesh Networking", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/FullMeshNetwork.svg" } // Generic node
            ]
        },
        {
            title: "Firmware & OS",
            skills: [
                { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Embedded Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                { name: "Zephyr RTOS", icon: "https://raw.githubusercontent.com/zephyrproject-rtos/zephyr/main/doc/_static/images/logo.svg" },
                { name: "OpenWRT", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/OpenWrt_Logo.svg" },
                { name: "FreeRTOS", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/FreeRTOS_logo_2005.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
            ]
        },
        {
            title: "Hardware & Platforms",
            skills: [
                { name: "Espressif", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Espressif_Logo.svg" },
                { name: "ST Micro", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/ST_logo_2020_blue_V.svg" },
                { name: "Nordic Semi", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Nordic_Semiconductor_Company_Logo.svg" },
                { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
                { name: "Altium", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Altium_Logo.svg" },
                { name: "KiCad", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/KiCad-Logo.svg" }
            ]
        }
    ];

    return (
        <section id="skills" className="section bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="section-badge">Expertise</span>
                    <h2 className="section-title">Technical Arsenal</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="skills-content">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="skills-section"
                    >
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className={`skills-category ${idx > 0 ? 'mt-8' : ''}`}>
                                <h4 className="skills-subtitle">{category.title}</h4>
                                <div className="skills-grid">
                                    {category.skills.map((skill, index) => (
                                        <div key={index} className="skill-card group">
                                            <div className="skill-icon-wrapper">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="skill-icon"
                                                />
                                            </div>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
