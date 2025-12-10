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
 * Checks both static imports and localStorage (from upload page)
 * @param {string} repoName - The repository name (e.g., 'table-insert')
 * @returns {string|null} - The image path or null if not found
 */
export const getLocalProjectImage = (repoName) => {
  const normalizedName = repoName.toLowerCase();
  
  // First check static imports
  if (projectImages[normalizedName]) {
    return projectImages[normalizedName];
  }
  
  // Then check localStorage (from upload page)
  try {
    const stored = localStorage.getItem('projectImages');
    if (stored) {
      const uploadedImages = JSON.parse(stored);
      if (uploadedImages[normalizedName]) {
        return uploadedImages[normalizedName];
      }
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  
  return null;
};

export default projectImages;
