// Project Images Configuration
// Simply import your project screenshots from the assets/projects folder

// Example: If you have table-insert.png in assets/projects/
// import tableInsert from '../assets/projects/table-insert.png';
// import anotherProject from '../assets/projects/another-project.jpg';

// Add your imports here:


// Map repository names (lowercase with hyphens) to imported images
export const projectImages = {
  // Example:
  // 'table-insert': tableInsert,
  // 'another-project': anotherProject,
  
  // Add your mappings here (must match GitHub repo name exactly, but lowercase):
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
