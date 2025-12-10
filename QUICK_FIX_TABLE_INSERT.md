# Quick Fix: Add Your Table Insert Project Image

## The Fastest Solution

Since you mentioned you have a "table-insert.png" image:

### Step 1: Copy Your Image
Copy your `table-insert.png` file to:
```
g:\React Final Portfolio\src\assets\projects\table-insert.png
```

### Step 2: Update projectImages.js

Open `src/config/projectImages.js` and update it:

```javascript
// Import your table insert project screenshot
import tableInsert from '../assets/projects/table-insert.png';

// Map repository names to images
export const projectImages = {
  'table-insert': tableInsert,
  // Add more projects here as needed
};

export const getLocalProjectImage = (repoName) => {
  const normalizedName = repoName.toLowerCase();
  return projectImages[normalizedName] || null;
};

export default projectImages;
```

### Step 3: Test It!
```bash
npm start
```

Go to the Projects section and your Table Insert project should now show your actual image!

---

## For Multiple Projects

If you have images for other projects, repeat the same process:

1. **Copy image** to `src/assets/projects/your-project-name.png`
2. **Import it** in `projectImages.js`
3. **Add mapping** using the exact repository name (in lowercase with hyphens)

Example:
```javascript
import tableInsert from '../assets/projects/table-insert.png';
import portfolioSite from '../assets/projects/portfolio-website.jpg';
import todoApp from '../assets/projects/todo-app.png';

export const projectImages = {
  'table-insert': tableInsert,
  'portfolio-website': portfolioSite,
  'todo-app': todoApp,
};
```

---

## Alternative: Add to Repository

Instead of adding to portfolio, you can add the image to your actual repository:

1. Go to your `table-insert` repository
2. Add `screenshot.png` to the root folder
3. Commit and push
4. Your portfolio will automatically fetch it!

---

## Troubleshooting

**Image not showing?**
- Check the exact repository name on GitHub (must match exactly)
- Verify file path: `src/assets/projects/table-insert.png`
- Check browser console (F12) for errors
- Make sure the image file isn't too large (keep under 500KB)

**Different repository name?**
If your repository is called something else (like `Table-Insert` or `tableinsert`), use the exact name but in lowercase with hyphens in the mapping.
