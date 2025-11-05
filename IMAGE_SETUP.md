# How to Add Your Profile Image

## Quick Steps:

1. **Locate your image file** (the one you just showed me)
   
2. **Save it as:** `profile.jpg`

3. **Copy it to:** `g:\React Final Portfolio\src\assets\profile.jpg`
   - Replace the placeholder file that's currently there

4. **The image will automatically appear** in your portfolio!

## Alternative: Using a Different Image Name

If you want to use a different filename (like `my-photo.png`), update the import in:

**File:** `src/components/Hero/Hero.js`

Change line 6 from:
```javascript
import profileImage from '../../assets/profile.jpg';
```

To:
```javascript
import profileImage from '../../assets/my-photo.png';
```

## Image Requirements:

- ✅ **Format:** JPG, PNG, or WebP
- ✅ **Size:** Recommended 500x500px to 1000x1000px
- ✅ **Aspect Ratio:** Square (1:1) works best
- ✅ **File Size:** Under 500KB for best performance

## Current Image Status:

The portfolio is currently set up to use: `src/assets/profile.jpg`

**Simply copy your image there and the portfolio will display it automatically!**

---

💡 **Tip:** You can optimize your image using tools like:
- [TinyPNG](https://tinypng.com/) - Compress without losing quality
- [Squoosh](https://squoosh.app/) - Google's image optimizer
