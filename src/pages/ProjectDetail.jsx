import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink, Calendar, Server, Tag } from 'lucide-react';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Project not found</h2>
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            <div className="container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Back to Portfolio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="project-hero"
                >
                    <div className="project-hero-content">
                        <span className="project-type-badge">{project.type}</span>
                        <h1 className="project-title">{project.title}</h1>
                        <p className="project-client">Client: <span>{project.client}</span></p>

                        <div className="project-links">
                            {project.repo && (
                                <a href={`https://github.com/${project.repo}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    <Github size={20} /> Source Code
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <ExternalLink size={20} /> Live Project
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="project-main-content"
                >
                    <div className="project-image-container">
                        <img src={project.image} alt={project.title} className="detail-image" />
                    </div>

                    <div className="project-info-grid">
                        <div className="info-block">
                            <h3><Server size={20} className="inline-icon" /> Overview</h3>
                            <p>{project.desc}</p>
                        </div>
                        <div className="info-block">
                            <h3><Calendar size={20} className="inline-icon" /> Date</h3>
                            <p>{project.date}</p>
                        </div>
                    </div>

                    <div className="project-description-full">
                        <h3>Project Details</h3>
                        <p>{project.details}</p>
                    </div>

                    <div className="project-tech-stack">
                        <h3> Technologies Used</h3>
                        <div className="tags-container">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="tech-tag">
                                    <Tag size={14} className="mr-1" /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail;
