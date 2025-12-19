import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Wireless & IoT Protocols",
            skills: [
                { name: "LoRaWAN", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/LoRaWAN_logo.svg" },
                { name: "WiFi HaLow", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/320px-WiFi_Logo.svg.png" },
                { name: "Zigbee", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Zigbee_logo.svg/320px-Zigbee_logo.svg.png" },
                { name: "Bluetooth LE", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bluetooth_Logo_%282023%29.svg/320px-Bluetooth_Logo_%282023%29.svg.png" },
                { name: "MQTT", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Iot-mqtt.svg/100px-Iot-mqtt.svg.png" }, // Generic IoT/MQTT representation or keep text if fail
                { name: "Thread", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Thread_Group_Logo.svg/320px-Thread_Group_Logo.svg.png" },
                { name: "Matter", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Matter_mark.svg/320px-Matter_mark.svg.png" },
                { name: "Mesh Networking", icon: "https://cdn-icons-png.flaticon.com/512/3660/3660463.png" } // Generic node
            ]
        },
        {
            title: "Firmware & OS",
            skills: [
                { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Embedded Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                { name: "Zephyr RTOS", icon: "https://raw.githubusercontent.com/zephyrproject-rtos/zephyr/main/doc/_static/images/logo.svg" },
                { name: "OpenWRT", icon: "https://upload.wikimedia.org/wikipedia/commons/2/22/OpenWrt_logo_2016.svg" },
                { name: "FreeRTOS", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3a/FreeRTOS_Logo.jpg" }, // Need careful styling for white bg
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
            ]
        },
        {
            title: "Hardware & Platforms",
            skills: [
                { name: "ESP32", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Espressif_Systems_logo.svg/320px-Espressif_Systems_logo.svg.png" },
                { name: "STM32", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ST_Microelectronics_Logo.svg/320px-ST_Microelectronics_Logo.svg.png" },
                { name: "Nordic Semi", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Nordic_Semiconductor_logo.svg/320px-Nordic_Semiconductor_logo.svg.png" },
                { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
                { name: "Altium", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Altium_Logo_2017.svg/320px-Altium_Logo_2017.svg.png" },
                { name: "KiCad", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/KiCad-Logo.svg/320px-KiCad-Logo.svg.png" }
            ]
        }
    ];

    return (
        <section id="skills" className="section">
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
