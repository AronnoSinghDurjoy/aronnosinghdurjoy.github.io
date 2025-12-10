import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { getLocalProjectImage } from '../../config/projectImages';
import './Projects.css';

const Projects = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState([]);

  useEffect(() => {
    fetchGitHubProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update displayed projects when projects or filter changes
  useEffect(() => {
    const filtered = filter === 'All' 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    if (!showAll && filtered.length > 3) {
      // Shuffle and take 3 random projects
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      setDisplayedProjects(shuffled.slice(0, 3));
    } else {
      setDisplayedProjects(filtered);
    }
  }, [projects, filter, showAll]);

  const fetchGitHubProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/AronnoSinghDurjoy/repos?sort=updated&per_page=100');
      const data = await response.json();
      
      // Fetch detailed repo info for images
      const formattedProjectsPromises = data
        .filter(repo => !repo.fork && !repo.archived)
        .slice(0, 12)
        .map(async (repo) => {
          // Try to fetch repository details for social preview image
          let socialImage = null;
          try {
            const repoResponse = await fetch(`https://api.github.com/repos/AronnoSinghDurjoy/${repo.name}`);
            const repoData = await repoResponse.json();
            
            // GitHub repositories can have a social preview image
            // We'll check for it in the raw content URL pattern
            const possibleImageUrl = `https://raw.githubusercontent.com/AronnoSinghDurjoy/${repo.name}/main/screenshot.png`;
            const imageCheck = await fetch(possibleImageUrl, { method: 'HEAD' });
            
            if (imageCheck.ok) {
              socialImage = possibleImageUrl;
            } else {
              // Try alternative paths
              const altUrl = `https://raw.githubusercontent.com/AronnoSinghDurjoy/${repo.name}/master/screenshot.png`;
              const altCheck = await fetch(altUrl, { method: 'HEAD' });
              if (altCheck.ok) socialImage = altUrl;
            }
          } catch (err) {
            console.log(`No screenshot found for ${repo.name}`);
          }

          return {
            title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: repo.description || 'A cool project built with passion and code',
            image: getLocalProjectImage(repo.name) || socialImage || getProjectImage(repo.name, repo.language),
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
          };
        });

      const formattedProjects = await Promise.all(formattedProjectsPromises);
      setProjects(formattedProjects);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
      setProjects(getFallbackProjects());
      setLoading(false);
    }
  };

  const getProjectImage = (projectName, language) => {
    const languageColors = {
      'JavaScript': '667eea/ffffff',
      'TypeScript': '3178c6/ffffff',
      'Python': '3776AB/ffffff',
      'Java': '007396/ffffff',
      'HTML': 'E34F26/ffffff',
      'CSS': '1572B6/ffffff',
      'React': '61DAFB/ffffff',
      'Vue': '42b883/ffffff',
      'PHP': '777BB4/ffffff',
      'C++': '00599C/ffffff',
      'C#': '239120/ffffff',
      'Ruby': 'CC342D/ffffff',
      'Go': '00ADD8/ffffff'
    };

    const color = languageColors[language] || '06b6d4/ffffff';
    const displayName = projectName.replace(/-/g, '+');
    
    return `https://via.placeholder.com/800x500/${color}?text=${displayName}`;
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
      title: 'Portfolio Website',
      description: 'My personal portfolio website showcasing my work and skills',
      image: 'https://via.placeholder.com/800x500/667eea/ffffff?text=Portfolio+Website',
      tags: ['React', 'CSS', 'JavaScript'],
      category: 'Frontend',
      github: 'https://github.com/AronnoSinghDurjoy',
      demo: 'https://aronnosinghdurjoy.github.io',
      stars: 0,
      forks: 0,
      updated: new Date().toLocaleDateString()
    },
    {
      title: 'Data Analysis Project',
      description: 'Advanced data analysis and visualization using Python',
      image: 'https://via.placeholder.com/800x500/3776AB/ffffff?text=Data+Analysis',
      tags: ['Python', 'Pandas', 'Tableau'],
      category: 'Backend',
      github: 'https://github.com/AronnoSinghDurjoy',
      demo: 'https://github.com/AronnoSinghDurjoy',
      stars: 0,
      forks: 0,
      updated: new Date().toLocaleDateString()
    },
    {
      title: 'Web Application',
      description: 'Full-stack web application with modern technologies',
      image: 'https://via.placeholder.com/800x500/10b981/ffffff?text=Web+Application',
      tags: ['React', 'Node.js', 'MySQL'],
      category: 'Full Stack',
      github: 'https://github.com/AronnoSinghDurjoy',
      demo: 'https://github.com/AronnoSinghDurjoy',
      stars: 0,
      forks: 0,
      updated: new Date().toLocaleDateString()
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Other'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleSeeMore = () => {
    if (!showAll) {
      setDisplayedProjects(filteredProjects);
      setShowAll(true);
    } else {
      // Shuffle and show 3 new random projects
      const shuffled = [...filteredProjects].sort(() => Math.random() - 0.5);
      setDisplayedProjects(shuffled.slice(0, 3));
      setShowAll(false);
    }
  };

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
          <>
            <div className="projects-grid">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        // If image fails to load, use fallback
                        e.target.src = getProjectImage(project.title, project.tags[0]);
                      }}
                    />
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
            
            {filteredProjects.length > 3 && (
              <motion.div 
                className="see-more-container"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  className="see-more-btn"
                  onClick={handleSeeMore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showAll ? 'Show Less' : 'See More Projects'}
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
