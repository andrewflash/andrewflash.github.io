import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import '../styles/Projects.css';

// Projects are already sorted or imported sorted, if not sort here
const sortedProjects = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));

const ProjectRow = ({ project, index, isOpen, onToggle }) => {
    const year = project.date.split('-')[0];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`project-row ${isOpen ? 'active' : ''}`}
        >
            <div
                className="project-row-summary project-link-wrapper"
                onClick={onToggle}
            >
                {/* Year */}
                <div className="col-year">
                    {year}
                </div>

                {/* Client */}
                <div className="col-client">
                    {project.client}
                </div>

                {/* Project Title */}
                <div className="col-title">
                    {project.title}
                </div>

                {/* Type/Service */}
                <div className="col-type">
                    {project.type}
                </div>

                {/* Action Icon */}
                <div className="col-action">
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="project-row-expanded"
                    >
                        <div className="expanded-inner">
                            {/* Main Content */}
                            <div className="expanded-content">
                                <div className="expanded-grid">
                                    {/* Left: Description & Details */}
                                    <div className="expanded-info">
                                        <p className="project-description">
                                            {project.desc}
                                        </p>

                                        <div className="project-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="tag-badge">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Meta & Actions */}
                                    <div className="expanded-meta">
                                        {/* Mobile-only Year display in expanded view */}
                                        <div className="mobile-meta">
                                            <Calendar size={14} />
                                            <span>{project.date}</span>
                                        </div>

                                        <Link to={`/project/${project.id}`}>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="project-image"
                                            />
                                        </Link>

                                        <div className="project-actions">
                                            <Link
                                                to={`/project/${project.id}`}
                                                className="action-link text-primary"
                                                style={{ color: 'var(--primary)', fontWeight: 600 }}
                                            >
                                                <ArrowRight size={16} />
                                                <span>View Case Study</span>
                                            </Link>

                                            {project.repo && (
                                                <a
                                                    href={`https://github.com/${project.repo}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="action-link"
                                                >
                                                    <Github size={16} />
                                                    <span>Source Code</span>
                                                </a>
                                            )}
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="action-link"
                                            >
                                                <ExternalLink size={16} />
                                                <span>Live Project</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Projects = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="projects" className="section bg-secondary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="projects-header"
                >
                    <span className="section-badge">Portfolio</span>
                    <h2 className="section-title">Selected Works</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">
                        A collection of projects focusing on embedded systems, IoT infrastructure, and AI integration for enterprise clients.
                    </p>
                </motion.div>

                {/* Table Header - Desktop Only */}
                <div className="projects-table-header">
                    <div className="col-year">Year</div>
                    <div className="col-client">Client</div>
                    <div className="col-title">Project</div>
                    <div className="col-type">Domain</div>
                    <div className="col-action text-right">More</div>
                </div>

                <div className="projects-list">
                    {sortedProjects.map((project, index) => (
                        <ProjectRow
                            key={index}
                            index={index}
                            project={project}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

