# How to Add Project Images - Two Methods

## Method 1: Add Images to Each Repository (Recommended) ⭐

Just add an image to the **root folder** of each repository on GitHub!

### Supported Image Names:
Your portfolio will automatically look for these files in order:

1. `YourRepoName.png` (e.g., `Table-Insert-Portal.png`)
2. `YourRepoName.jpg`
3. `screenshot.png`
4. `screenshot.jpg`
5. `preview.png`
6. `preview.jpg`

### Example: For "Table-Insert-Portal" Repository

1. Go to your repository: https://github.com/AronnoSinghDurjoy/Table-Insert-Portal
2. Click "Add file" → "Upload files"
3. Upload your image as **`TableInsert.png`** or **`screenshot.png`**
4. Commit the file
5. Done! ✅ Your portfolio will automatically display it!

### Why This Method is Best:
- ✅ No need to redeploy your portfolio
- ✅ Images update automatically
- ✅ Each project keeps its own image
- ✅ Works immediately after committing to GitHub

---

## Method 2: Add Images to Portfolio Locally

If you prefer to keep images in your portfolio project:

### 1. Add Your Screenshots to the Project

Copy your project images to:
```
src/assets/projects/
```

For example:
- `src/assets/projects/table-insert.png`
- `src/assets/projects/my-portfolio.jpg`

### 2. Update projectImages.js

Open: `src/config/projectImages.js`

Add your imports and mappings:

```javascript
// Import your images
import tableInsert from '../assets/projects/table-insert.png';
import myPortfolio from '../assets/projects/my-portfolio.jpg';

// Map them to repository names (must match GitHub repo name, lowercase)
export const projectImages = {
  'table-insert-portal': tableInsert,
  'aronnosinghdurjoy.github.io': myPortfolio,
};
```

### 3. Deploy

```bash
npm run deploy
```

---

## Quick Comparison

| Feature | Method 1 (Repo) | Method 2 (Local) |
|---------|----------------|------------------|
| Setup | Very Easy | Easy |
| Update Speed | Instant | Need redeploy |
| Image Location | In each repo | In portfolio |
| Best For | Quick updates | Full control |

---

## Important Notes

- **Image Format**: PNG, JPG, or JPEG
- **Image Size**: Keep under 500KB for best performance
- **Aspect Ratio**: 16:9 (e.g., 1200x675px) works best
- **Location**: Root folder of repository (not in subfolders)

---

## Example: Table Insert Portal

Your repository: `Table-Insert-Portal`

**Option A:** Upload `TableInsert.png` to the root of the repository ✅ (Easiest)

**Option B:** Upload `screenshot.png` to the root of the repository ✅

**Option C:** Save locally as `table-insert-portal.png` and use Method 2

All three options will work!
