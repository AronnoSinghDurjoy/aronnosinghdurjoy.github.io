import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ImageUpload.css';

const ImageUpload = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [uploadedImages, setUploadedImages] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchRepositories();
    loadUploadedImages();
  }, []);

  const fetchRepositories = async () => {
    try {
      const response = await fetch('https://api.github.com/users/AronnoSinghDurjoy/repos?sort=updated&per_page=100');
      const data = await response.json();
      const filteredRepos = data
        .filter(repo => !repo.fork && !repo.archived)
        .map(repo => ({
          name: repo.name,
          fullName: repo.full_name,
          description: repo.description
        }));
      setRepositories(filteredRepos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      setLoading(false);
    }
  };

  const loadUploadedImages = () => {
    const stored = localStorage.getItem('projectImages');
    if (stored) {
      setUploadedImages(JSON.parse(stored));
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setMessage('Please select a valid image file');
    }
  };

  const handleUpload = () => {
    if (!selectedRepo || !imageFile) {
      setMessage('Please select a repository and an image');
      return;
    }

    // Store the image in localStorage with base64 encoding
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = {
        ...uploadedImages,
        [selectedRepo]: reader.result
      };
      localStorage.setItem('projectImages', JSON.stringify(newImages));
      setUploadedImages(newImages);
      setMessage(`✅ Image uploaded successfully for ${selectedRepo}!`);
      setImageFile(null);
      setImagePreview('');
      setSelectedRepo('');
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    };
    reader.readAsDataURL(imageFile);
  };

  const handleDelete = (repoName) => {
    const newImages = { ...uploadedImages };
    delete newImages[repoName];
    localStorage.setItem('projectImages', JSON.stringify(newImages));
    setUploadedImages(newImages);
    setMessage(`🗑️ Image deleted for ${repoName}`);
    setTimeout(() => setMessage(''), 3000);
  };

  const exportConfig = () => {
    // Generate the projectImages.js file content
    let configContent = '// Auto-generated project images configuration\n\n';
    configContent += '// This file is generated from the Image Upload page\n';
    configContent += '// Images are stored as base64 data URLs\n\n';
    configContent += 'export const projectImages = {\n';
    
    Object.keys(uploadedImages).forEach(repoName => {
      configContent += `  '${repoName}': '${uploadedImages[repoName]}',\n`;
    });
    
    configContent += '};\n\n';
    configContent += 'export const getLocalProjectImage = (repoName) => {\n';
    configContent += '  const normalizedName = repoName.toLowerCase();\n';
    configContent += '  return projectImages[normalizedName] || null;\n';
    configContent += '};\n\n';
    configContent += 'export default projectImages;\n';

    // Download the file
    const blob = new Blob([configContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projectImages.js';
    a.click();
    URL.revokeObjectURL(url);
    
    setMessage('📥 Configuration file downloaded!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="image-upload-page">
      <div className="upload-container">
        <motion.div
          className="upload-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>🖼️ Project Image Uploader</h1>
          <p>Upload screenshots for your portfolio projects</p>
        </motion.div>

        {message && (
          <motion.div
            className="message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {message}
          </motion.div>
        )}

        <motion.div
          className="upload-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Upload New Image</h2>
          
          <div className="form-group">
            <label>Select Repository</label>
            {loading ? (
              <p>Loading repositories...</p>
            ) : (
              <select
                value={selectedRepo}
                onChange={(e) => setSelectedRepo(e.target.value)}
                className="repo-select"
              >
                <option value="">-- Choose a repository --</option>
                {repositories.map(repo => (
                  <option key={repo.name} value={repo.name}>
                    {repo.name} {repo.description ? `- ${repo.description}` : ''}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="form-group">
            <label>Select Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="file-input"
            />
          </div>

          {imagePreview && (
            <div className="image-preview">
              <h3>Preview</h3>
              <img src={imagePreview} alt="Preview" />
            </div>
          )}

          <button
            className="upload-btn"
            onClick={handleUpload}
            disabled={!selectedRepo || !imageFile}
          >
            📤 Upload Image
          </button>
        </motion.div>

        {Object.keys(uploadedImages).length > 0 && (
          <motion.div
            className="uploaded-images"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="section-header">
              <h2>Uploaded Images ({Object.keys(uploadedImages).length})</h2>
              <button className="export-btn" onClick={exportConfig}>
                💾 Export Config
              </button>
            </div>
            
            <div className="images-grid">
              {Object.entries(uploadedImages).map(([repoName, imageData]) => (
                <div key={repoName} className="image-card">
                  <div className="card-image">
                    <img src={imageData} alt={repoName} />
                  </div>
                  <div className="card-content">
                    <h3>{repoName}</h3>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(repoName)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          className="instructions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>📋 How to Use</h3>
          <ol>
            <li>Select a repository from the dropdown</li>
            <li>Choose an image file (PNG, JPG, etc.)</li>
            <li>Click "Upload Image"</li>
            <li>The image is saved in your browser's local storage</li>
            <li>Click "Export Config" to download the configuration file</li>
            <li>Replace <code>src/config/projectImages.js</code> with the downloaded file</li>
            <li>Rebuild and deploy your portfolio!</li>
          </ol>
          
          <div className="note">
            <strong>Note:</strong> Images are stored in your browser's local storage and will persist across sessions. 
            You need to export and update the config file to make them visible in your portfolio.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageUpload;
