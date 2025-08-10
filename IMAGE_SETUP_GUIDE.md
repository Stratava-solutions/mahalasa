# 📸 Mahalasa Website Image Setup Guide

## Image Directory Structure
The website expects images in these specific folders:

```
public/
├── images/
│   ├── temple/
│   │   ├── temple-main.jpg          (Main temple view for hero carousel)
│   │   ├── temple-interior.jpg      (Interior shots for gallery)
│   │   └── temple-exterior.jpg      (External architecture views)
│   ├── deity/
│   │   └── mahalasa-deity.jpg       (Goddess Mahalasa idol/murti)
│   ├── festivals/
│   │   ├── festival-celebration.jpg (Festival events)
│   │   └── aarti-ceremony.jpg       (Daily aarti ceremonies)
│   └── gallery/
│       └── (additional photos for gallery)
```

## Required Image Files

### 🏛️ **Temple Images** (`public/images/temple/`)
- **temple-main.jpg** - Primary temple facade (for hero carousel)
- **temple-interior.jpg** - Inside temple view (for gallery)
- **temple-exterior.jpg** - External architecture (for gallery)

### 🕉️ **Deity Images** (`public/images/deity/`)
- **mahalasa-deity.jpg** - Main deity photo (for hero carousel & gallery)

### 🎉 **Festival Images** (`public/images/festivals/`)
- **festival-celebration.jpg** - Festival gathering (for hero carousel & gallery)
- **aarti-ceremony.jpg** - Daily aarti ceremony (for gallery)

## How to Add Your Images

### Option 1: Manual Copy (Recommended)
1. Open Finder and navigate to: `/Users/jeevandsouza/Desktop/Learning/mahalasa/public/images/`
2. Create subfolders: `temple`, `deity`, `festivals` if they don't exist
3. Copy your images with the exact names listed above
4. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### Option 2: Using Terminal
```bash
# Navigate to the project
cd /Users/jeevandsouza/Desktop/Learning/mahalasa/public/images

# Copy your images (replace SOURCE_PATH with actual image locations)
cp ~/Downloads/your-temple-main.jpg ./temple/temple-main.jpg
cp ~/Downloads/your-deity.jpg ./deity/mahalasa-deity.jpg
cp ~/Downloads/your-festival.jpg ./festivals/festival-celebration.jpg
```

## Image Specifications
- **Format**: JPG, PNG, or WebP
- **Resolution**: Minimum 1200x800px (higher is better)
- **File Size**: Under 2MB per image (optimized for web)
- **Aspect Ratio**: 16:9 or 4:3 recommended for hero carousel

## Features Added to Website

### ✅ Hero Carousel
- Auto-rotating image slideshow on homepage
- Navigation arrows and dots
- Mobile responsive
- Fallback to existing header-image.jpg if custom images not found

### ✅ Photo Gallery Page
- Category-based filtering (Temple, Deity, Festivals)
- Responsive grid layout
- Full-screen image modal
- Mobile-friendly touch navigation

### ✅ Automatic Fallbacks
- If your custom images aren't found, the site uses the existing `header-image.jpg`
- No broken images - graceful degradation

## Testing Your Images
1. Add your images to the folders
2. Run the development server: `npm run dev`
3. Visit: `http://localhost:3000` (home page carousel)
4. Visit: `http://localhost:3000/gallery` (photo gallery)

## Need Help?
- Make sure image names match exactly (case-sensitive)
- Check file extensions (.jpg, not .jpeg)
- Verify images are in correct subfolders
- Images should be web-optimized (not too large)

---
*The website will work perfectly with fallback images until you add your custom temple photos!*