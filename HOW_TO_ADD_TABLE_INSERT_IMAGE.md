# How to Add Your "Table Insert" Project Image

## You mentioned you have a "table insert png" image - here's how to add it:

## Option 1: Add to Your Portfolio (Easiest)

### 1. Locate your image
Find your `table-insert.png` (or whatever it's called) on your computer

### 2. Copy it here:
```
g:\React Final Portfolio\src\assets\projects\table-insert.png
```

### 3. Open this file:
```
g:\React Final Portfolio\src\config\projectImages.js
```

### 4. Replace the contents with:
```javascript
// Import your table insert project screenshot
import tableInsert from '../assets/projects/table-insert.png';

export const projectImages = {
  'table-insert': tableInsert,
};

export const getLocalProjectImage = (repoName) => {
  const normalizedName = repoName.toLowerCase();
  return projectImages[normalizedName] || null;
};

export default projectImages;
```

### 5. Save and run:
```bash
npm start
```

Your image should now appear! 🎉

---

## Option 2: Add to GitHub Repository

### 1. Go to your table-insert repository
Navigate to: `https://github.com/AronnoSinghDurjoy/table-insert` (or whatever your repo is called)

### 2. Add the screenshot
- Click "Add file" → "Upload files"
- Upload your `screenshot.png`
- Or name it `table-insert.png`

### 3. Commit the file
- Add commit message: "Add project screenshot"
- Click "Commit changes"

### 4. Wait a moment
Your portfolio will automatically fetch this image the next time it loads!

---

## Important: Check Your Repository Name

Make sure you know the EXACT name of your repository on GitHub. It might be:
- `table-insert`
- `Table-Insert`
- `tableinsert`
- `table_insert`
- Something else

To check:
1. Go to: https://github.com/AronnoSinghDurjoy
2. Find your table insert project
3. Note the EXACT name in the URL

Then use that exact name (but in lowercase with hyphens) in `projectImages.js`.

For example:
- If repo is `Table-Insert` → use `'table-insert'`
- If repo is `tableInsert` → use `'tableinsert'`
- If repo is `table_management` → use `'table_management'`

---

## What the Code Changes Did

I've updated your portfolio to:
1. ✅ Check for local images first (in `src/assets/projects/`)
2. ✅ Try to fetch from GitHub repository (looking for `screenshot.png`)
3. ✅ Fall back to placeholder images if nothing is found
4. ✅ Handle image loading errors gracefully

So you have multiple ways to add images, and they all work together!

---

## Need Help?

If it's still not working:
1. Press F12 in your browser
2. Go to "Console" tab
3. Look for any error messages
4. Share those with me and I can help fix it!
