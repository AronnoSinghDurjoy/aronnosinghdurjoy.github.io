import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './Projects.css';

const Projects = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchGitHubProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/AronnoSinghDurjoy/repos?sort=updated&per_page=100');
      const data = await response.json();
      
      const formattedProjects = data
        .filter(repo => !repo.fork && !repo.archived)
        .map(repo => ({
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repo.description || 'A cool project built with passion and code',
          image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
          tags: [
            repo.language || 'Code',
            ...(repo.topics || []).slice(0, 3)
          ].filter(Boolean),
          category: getCategoryFromLanguage(repo.language),
          github: repo.html_url,
          demo: repo.homepage || repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: new Date(repo.updated_at).toLocaleDateString()
        }))
        .slice(0, 12);

      setProjects(formattedProjects);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
      setProjects(getFallbackProjects());
      setLoading(false);
    }
  };

  const getCategoryFromLanguage = (language) => {
    const frontendLangs = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vue', 'React'];
    const backendLangs = ['Python', 'Java', 'C++', 'C#', 'Go', 'Ruby', 'PHP'];
    
    if (!language) return 'Other';
    if (frontendLangs.includes(language)) return 'Frontend';
    if (backendLangs.includes(language)) return 'Backend';
    return 'Full Stack';
  };

  const getFallbackProjects = () => [
    {
      title: 'Portfolio Project',
      description: 'My personal portfolio website showcasing my work',
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Portfolio',
      tags: ['React', 'CSS', 'JavaScript'],
      category: 'Frontend',
      github: 'https://github.com/AronnoSinghDurjoy',
      demo: 'https://aronnosinghdurjoy.github.io',
      stars: 0,
      forks: 0,
      updated: new Date().toLocaleDateString()
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Other'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={`projects ${isDark ? 'dark' : 'light'}`} ref={ref}>
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {loading ? (
          <div className="loading-projects">
            <div className="loading-spinner"></div>
            <p>Fetching projects from GitHub...</p>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    {project.demo !== project.github && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stats">
                    <span className="stat">
                      <FaStar /> {project.stars}
                    </span>
                    <span className="stat">
                      <FaCodeBranch /> {project.forks}
                    </span>
                    <span className="stat-date">Updated: {project.updated}</span>
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
