# Resyvex Institute - Theme Customization Guide

## 🎨 How the Theme System Works

Your website now uses **CSS Variables** integrated with **Tailwind CSS** for easy theme customization. All color changes are made in one place!

### File Structure:
- **styles.css** - Contains all CSS variables (colors, fonts, spacing, etc.)
- **tailwind-override.css** - Maps CSS variables to Tailwind classes for seamless integration
- All HTML files link both files after Tailwind CDN

---

## 🎯 How to Change Theme Colors

### 1. **Open `styles.css`**

Go to the top of the file and find the `:root` section with CSS variables.

### 2. **Primary Color (Current: Red #dc2626)**

```css
:root {
    --primary-color: #dc2626;        /* Change this to your color */
    --primary-dark: #991b1b;         /* Darker shade for hover */
    --primary-light: #fca5a5;        /* Lighter shade */
}
```

**Where it affects:**
- Buttons (text, backgrounds, borders)
- Links and hover states
- Badges and tags
- Accents throughout the site

### 3. **Secondary Color (Current: Black #000000)**

```css
    --secondary-color: #000000;      /* Navigation, footers, dark sections */
    --secondary-light: #404040;      /* Dark gray */
```

**Where it affects:**
- Navigation bar background
- Footer background
- Dark gradient sections
- Secondary backgrounds

### 4. **Text & Background Colors**

```css
    --bg-white: #ffffff;             /* Main background */
    --bg-light-gray: #f9fafb;        /* Light sections */
    --text-dark: #111827;            /* Main text */
    --text-gray: #4b5563;            /* Secondary text */
```

---

## 📝 Quick Change Examples

### Example 1: Change Primary Red to Blue

```css
:root {
    --primary-color: #2563eb;        /* Blue instead of red */
    --primary-dark: #1e40af;         /* Darker blue */
    --primary-light: #93c5fd;        /* Lighter blue */
}
```
✅ All buttons, links, badges automatically turn blue!

### Example 2: Change Secondary Black to Dark Purple

```css
:root {
    --secondary-color: #6d28d9;      /* Purple */
    --secondary-light: #7c3aed;      /* Lighter purple */
}
```
✅ Navigation and footers now have purple background!

### Example 3: Change Text Color

```css
:root {
    --text-dark: #1f2937;            /* Darker text */
    --text-gray: #6b7280;            /* Different gray */
}
```

---

## 🔤 Typography Customization

### Font Sizes

```css
:root {
    --font-size-base: 1rem;          /* 16px */
    --font-size-lg: 1.125rem;        /* 18px */
    --font-size-xl: 1.25rem;         /* 20px */
    --font-size-2xl: 1.5rem;         /* 24px */
    --font-size-3xl: 1.875rem;       /* 30px */
    --font-size-4xl: 2.25rem;        /* 36px */
    --font-size-5xl: 3rem;           /* 48px */
    --font-size-6xl: 3.75rem;        /* 60px */
}
```

### Font Family

```css
:root {
    --font-family-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-family-heading: 'Arial', sans-serif;
}
```

---

## 📦 Spacing Customization

```css
:root {
    --spacing-xs: 0.25rem;           /* 4px */
    --spacing-sm: 0.5rem;            /* 8px */
    --spacing-md: 1rem;              /* 16px */
    --spacing-lg: 1.5rem;            /* 24px */
    --spacing-xl: 2rem;              /* 32px */
    --spacing-2xl: 3rem;             /* 48px */
}
```

---

## 🎭 Accent Colors

```css
:root {
    --accent-blue: #3b82f6;
    --accent-green: #10b981;
    --accent-yellow: #f59e0b;
    --accent-purple: #8b5cf6;
}
```

These are used for badges, success indicators, and special elements.

---

## ⚡ Advanced: Shadow Customization

```css
:root {
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

---

## ⏱️ Transition Customization

```css
:root {
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 300ms ease-in-out;
    --transition-slow: 500ms ease-in-out;
}
```

Make animations faster or slower!

---

## 🔄 How the Override System Works

The **tailwind-override.css** file automatically maps your CSS variables to all Tailwind classes:

- `text-red-600` → Uses `--primary-color`
- `bg-black` → Uses `--secondary-color`
- `text-gray-600` → Uses `--text-gray`
- All hover states automatically update
- All gradients automatically update

**This means:**
✅ You change ONE CSS variable  
✅ It updates EVERYWHERE in the website  
✅ No need to edit HTML files!

---

## 🎨 Professional Color Combinations

### Modern Blue & Navy
```css
--primary-color: #3b82f6;           /* Blue */
--primary-dark: #1e40af;            /* Navy */
--secondary-color: #001f3f;         /* Dark Navy */
```

### Green & Teal (Tech/Eco)
```css
--primary-color: #10b981;           /* Green */
--primary-dark: #047857;            /* Dark Green */
--secondary-color: #0f766e;         /* Teal */
```

### Orange & Gray (Warm)
```css
--primary-color: #f97316;           /* Orange */
--primary-dark: #c2410c;            /* Dark Orange */
--secondary-color: #1f2937;         /* Dark Gray */
```

### Purple & Indigo (Premium)
```css
--primary-color: #8b5cf6;           /* Purple */
--primary-dark: #6d28d9;            /* Dark Purple */
--secondary-color: #3730a3;         /* Indigo */
```

---

## ✅ Testing Your Changes

After editing `styles.css`:
1. **Save the file** (Ctrl+S)
2. **Refresh the browser** (F5 or Ctrl+R)
3. **Check all pages** - Home, Courses, Contact, etc.

All changes should reflect instantly!

---

## 📱 Responsive Breakpoints

The site automatically adapts to mobile/tablet using:
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px

All colors remain consistent across devices!

---

## 🆘 Troubleshooting

**Q: I changed a color but it didn't update?**
A: Make sure you:
1. Edited `styles.css` (not `tailwind-override.css`)
2. Saved the file
3. Refreshed the browser (hard refresh: Ctrl+Shift+R)

**Q: Can I use rgb() format instead of hex?**
A: Yes! Use:
```css
--primary-color: rgb(220, 38, 38);
```

**Q: Can I use hex color names?**
A: Use hex codes only (#dc2626) or rgb values (rgb(220, 38, 38))

---

## 🚀 Future Enhancements

When ready to use a local Tailwind build:
1. Install Tailwind locally
2. Use `tailwind.config.js` with CSS variable integration
3. Build for production with optimizations

For now, the CDN + CSS Variables approach is perfect for quick customization!

---

## 📞 Need Help?

The CSS variables system is designed to be simple:
- **One file to edit:** `styles.css`
- **One section to focus on:** `:root { ... }`
- **All colors change together:** Primary, dark, light variants

Enjoy your customizable theme! 🎉
