export const projects = [
    {
        id: "bridge-collision-system",
        title: "Bridge Collision Avoidance System",
        client: "Miota",
        desc: "Industrial safety system using sensor fusion (LiDAR, Water Current) to prevent vessel collisions.",
        details: "Designed and implemented a high-reliability safety system for bridge infrastructure protection. The system integrates multiple sensor inputs including LiDAR for object detection and water current sensors for environmental monitoring. Key achievements include developing a custom sensor fusion algorithm that reduced false positives by 40% and deploying the system in a harsh marine environment with 99.9% uptime.",
        tags: ["Sensor Fusion", "LiDAR", "Industrial IoT"],
        type: "Industrial IoT",
        date: "2024-02",
        link: "https://github.com/andrewflash",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "palm-secure-biometric",
        title: "Palm Secure Biometric Device",
        client: "PalmVB",
        desc: "High-security access control system utilizing IR/Optical vein recognition technology.",
        details: "Led the firmware development for a next-generation biometric access control device. Implemented secure boot and encrypted storage for sensitive biometric data. The system features a custom optical engine driver and advanced anti-spoofing algorithms that detect liveness through vein pattern analysis, achieving a False Acceptance Rate (FAR) of less than 0.0001%.",
        tags: ["Biometrics", "Embedded C++", "Hardware Design"],
        type: "Biometrics",
        date: "2023-11",
        link: "https://palmvb.com",
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "smart-traffic-analytics",
        title: "Smart Traffic Analytics System",
        client: "NTT",
        desc: "City-wide traffic monitoring system using Computer Vision for congestion prediction.",
        details: "Architected a scalable traffic analytics platform deploying edge AI on NVIDIA Jetson devices. The system processes video streams in real-time to classify vehicles and detect traffic violations. Cloud integration provides city planners with actionable insights through a dashboard visualizing congestion patterns and predicting peak traffic hours.",
        tags: ["Computer Vision", "Python", "Smart City"],
        type: "AI / Smart City",
        date: "2023-08",
        link: "https://github.com/andrewflash",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "wifi-halow-mesh",
        title: "WiFi HaLow Mesh Network",
        client: "Miota",
        desc: "Custom mesh networking protocol implementation for IEEE 802.11ah to extend range.",
        details: "Developed a robust mesh networking stack for the emerging WiFi HaLow standard (IEEE 802.11ah). This project focused on extending coverage for smart metering applications in dense urban environments. Implemented a custom routing protocol that optimizes for low power consumption and high reliability, achieving multi-hop communication over several kilometers.",
        tags: ["WiFi HaLow", "Networking", "C/C++"],
        type: "Networking",
        date: "2024-06",
        link: "https://github.com/andrewflash/luckfox-pico-halow",
        repo: "andrewflash/luckfox-pico-halow",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "satellite-iot-monitor",
        title: "Satellite IoT Monitor",
        client: "Miota",
        desc: "Direct-to-satellite monitoring system using Starlink integration for remote assets.",
        details: "Created a prototype for remote asset monitoring using direct-to-satellite communication. Integrated disparate industrial protocols (Modbus, CAN) into a unified gateway that transmits critical health data via Starlink. Reduced data usage by 90% through intelligent edge processing and delta compression algorithms.",
        tags: ["Satellite", "IoT", "Starlink"],
        type: "Satellite IoT",
        date: "2024-01",
        link: "https://github.com/andrewflash",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    }
];
