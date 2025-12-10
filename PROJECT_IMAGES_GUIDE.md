# How to Add Real Project Images to Your Portfolio

## Problem
Your portfolio currently shows placeholder images for projects. To display actual project screenshots, follow this guide.

## Solution 1: Add Screenshots to Each Repository (Recommended)

For each of your GitHub repositories that you want to showcase:

1. **Take a screenshot** of your project (preferably 1200x800px or 16:9 aspect ratio)

2. **Name the file:** `screenshot.png` or `screenshot.jpg`

3. **Add it to the root** of your repository:
   ```
   your-repo/
   ├── screenshot.png    ← Add this file
   ├── README.md
   └── ...other files
   ```

4. **Commit and push:**
   ```bash
   git add screenshot.png
   git commit -m "Add project screenshot"
   git push
   ```

5. **Your portfolio will automatically fetch** these images!

### Alternative Branches
If your main branch is called `master` instead of `main`, the code will automatically check both.

---

## Solution 2: Use Local Images in Your Portfolio

If you prefer to store images directly in your portfolio:

### Step 1: Add Images to Assets Folder

1. Save your project screenshots in: `src/assets/projects/`
2. Name them to match your repository names (use kebab-case):
   - `table-insert.png` for "Table Insert" project
   - `my-awesome-app.jpg` for "My Awesome App" project

### Step 2: Create Image Mapping

Create a new file: `src/config/projectImages.js`

```javascript
// Import all your project images
import tableInsert from '../assets/projects/table-insert.png';
import myAwesomeApp from '../assets/projects/my-awesome-app.jpg';
// ... add more imports

// Map repository names to images
export const projectImages = {
  'table-insert': tableInsert,
  'my-awesome-app': myAwesomeApp,
  // ... add more mappings
};

export const getLocalProjectImage = (repoName) => {
  return projectImages[repoName.toLowerCase()] || null;
};
```

### Step 3: Update Projects.js

In `src/components/Projects/Projects.js`, add this import at the top:

```javascript
import { getLocalProjectImage } from '../../config/projectImages';
```

Then modify the image assignment in the `fetchGitHubProjects` function:

```javascript
image: getLocalProjectImage(repo.name) || socialImage || getProjectImage(repo.name, repo.language),
```

---

## Solution 3: Use GitHub Social Preview Images

You can set a social preview image for each repository:

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Social preview**
4. Click **Edit** and upload an image
5. The image will be visible at: `https://opengraph.githubassets.com/[hash]/username/repo-name`

Note: This requires parsing GitHub's OpenGraph API, which is more complex.

---

## Image Requirements

✅ **Format:** PNG, JPG, or WebP
✅ **Recommended Size:** 1200x800px (16:9 ratio)
✅ **File Size:** Under 500KB for best performance
✅ **Quality:** Clear, high-resolution screenshots

## Quick Optimization Tools

- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [ImageOptim](https://imageoptim.com/) - Desktop app for Mac

---

## Example: Adding Image for "Table Insert" Project

### Method 1 (Repository Screenshot):
```bash
# In your table-insert repository
# Add screenshot.png to the root
git add screenshot.png
git commit -m "Add screenshot"
git push
```

### Method 2 (Local in Portfolio):
```bash
# In your portfolio project
# Save screenshot as: src/assets/projects/table-insert.png
```

Then add to `projectImages.js`:
```javascript
import tableInsert from '../assets/projects/table-insert.png';

export const projectImages = {
  'table-insert': tableInsert,
};
```

---

## Current Status

✅ **Code Updated:** Your portfolio now checks for real images first
✅ **Fallback Ready:** If no image is found, it uses placeholder images
✅ **Error Handling:** Images that fail to load are automatically replaced

**Next Step:** Choose a solution above and add your project screenshots!

## Testing

After adding images, test your portfolio:

1. Run: `npm start`
2. Navigate to the Projects section
3. Check if images are loading correctly
4. Check browser console for any errors

If images don't load, verify:
- ✓ File names match exactly (case-sensitive on Linux/Mac)
- ✓ File paths are correct
- ✓ Images are accessible (not in .gitignore)
- ✓ Images are pushed to GitHub (for Solution 1)

---

Need help? Check the browser console (F12) for error messages!
