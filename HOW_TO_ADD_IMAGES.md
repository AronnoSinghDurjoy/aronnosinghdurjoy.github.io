# How to Add Project Images - Simple Method

## Quick Steps

### 1. Add Your Screenshots to the Project

Copy your project images to:
```
src/assets/projects/
```

For example:
- `src/assets/projects/table-insert.png`
- `src/assets/projects/my-portfolio.jpg`
- `src/assets/projects/todo-app.png`

### 2. Update projectImages.js

Open: `src/config/projectImages.js`

Add your imports and mappings:

```javascript
// Import your images
import tableInsert from '../assets/projects/table-insert.png';
import myPortfolio from '../assets/projects/my-portfolio.jpg';
import todoApp from '../assets/projects/todo-app.png';

// Map them to repository names (must match GitHub repo name, lowercase)
export const projectImages = {
  'table-insert': tableInsert,
  'aronnosinghdurjoy.github.io': myPortfolio,
  'todo-app': todoApp,
};
```

### 3. Deploy

```bash
npm run deploy
```

Done! Your images will now show in your portfolio! ✅

---

## Important Notes

- **Repository Name**: Use the exact name from GitHub (but lowercase with hyphens)
- **Image Format**: PNG, JPG, or WebP
- **Image Size**: Keep under 500KB for best performance
- **Aspect Ratio**: 16:9 (e.g., 1200x675px) works best

---

## Example: Adding Table Insert Image

1. Save your screenshot as: `g:\React Final Portfolio\src\assets\projects\table-insert.png`

2. Edit `src/config/projectImages.js`:
   ```javascript
   import tableInsert from '../assets/projects/table-insert.png';
   
   export const projectImages = {
     'table-insert': tableInsert,
   };
   ```

3. Run: `npm run deploy`

4. Visit your portfolio - the image will appear! 🎉

---

## Find Your Repository Names

Visit: https://github.com/AronnoSinghDurjoy

Copy the exact repository name from GitHub, then convert to lowercase for the mapping.

Examples:
- `Table-Insert` → use `'table-insert'`
- `MyProject` → use `'myproject'`
- `todo_app` → use `'todo_app'`
