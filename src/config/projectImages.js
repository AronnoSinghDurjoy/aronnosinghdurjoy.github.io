// Project Images Configuration
// This file maps repository names to local images

// Import your project screenshots here
// Example:
// import tableInsert from '../assets/projects/table-insert.png';
// import portfolioWebsite from '../assets/projects/portfolio-website.jpg';

// Map repository names (in lowercase, with hyphens) to imported images
export const projectImages = {
  // Example mappings:
  // 'table-insert': tableInsert,
  // 'portfolio-website': portfolioWebsite,
  // 'my-awesome-project': myAwesomeProject,
  
  // Add your project images here following this pattern:
  // 'repository-name': importedImage,
};

/**
 * Get local project image by repository name
 * @param {string} repoName - The repository name (e.g., 'table-insert')
 * @returns {string|null} - The image path or null if not found
 */
export const getLocalProjectImage = (repoName) => {
  const normalizedName = repoName.toLowerCase();
  return projectImages[normalizedName] || null;
};

export default projectImages;
