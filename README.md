# Resyvex Institute Website

A professional static website for Resyvex Institute - an educational institution offering courses, workshops, and career guidance.

## Website Features

### Design & Theme
- **Color Scheme**: Red (#EF4444) and Black (#1F2937) with White background
- **Framework**: Tailwind CSS (via CDN)
- **Responsive**: Mobile-friendly design with breakpoints
- **Professional**: Clean, modern UI with consistent branding

### Pages Included

1. **index.html** - Home Page
   - Hero section with call-to-action buttons
   - Features/Benefits section
   - Quick links to services
   - Newsletter subscription area

2. **courses.html** - Courses Page
   - 6 featured courses:
     - Web Development
     - Data Science & AI
     - Mobile App Development
     - Cloud & DevOps
     - Cybersecurity
     - Business Analytics
   - Course cards with detailed information
   - Call-to-action for enrollment

3. **workshop.html** - Workshops & Seminars
   - Workshop listings with duration and format
   - Upcoming workshops schedule
   - Registration buttons

4. **guidance.html** - Free Career Guidance
   - Career consultation services
   - Course selection help
   - Resume and interview preparation
   - Industry mentorship programs
   - Step-by-step guidance process

5. **placements.html** - Placements
   - Placement statistics
   - Recruitment partners
   - Placement process flow
   - Student success stories with testimonials

6. **support.html** - Student Support
   - 24/7 help desk
   - Learning resources
   - Mentorship program
   - Technical support
   - Academic progress tracking
   - Community forum
   - FAQ section

7. **contact.html** - Contact Us
   - Contact form
   - Address, phone, and email information
   - Office hours
   - Social media links

8. **terms.html** - Terms & Conditions
   - Legal terms for using the service
   - Course enrollment policies
   - Refund policy
   - Intellectual property rights
   - Disclaimer and limitations

9. **privacy.html** - Privacy Policy
   - Data collection and usage policies
   - Security information
   - Cookie policy
   - User rights
   - Data retention
   - Contact information for privacy concerns

## Navigation

All pages feature:
- **Sticky Navigation Bar**: Black background with red accents
- **Logo**: "Resyvex Institute" branding
- **Links**: Easy navigation to all pages
- **Mobile Menu**: Hamburger menu on mobile devices
- **Footer**: Quick links, resources, and legal pages

## How to Use

1. **Open the Website**
   - Open `index.html` in any web browser
   - Ensure you have an internet connection (for Tailwind CSS CDN)

2. **Navigation**
   - Click links in the navigation bar to visit different pages
   - Use the footer links for quick access to pages
   - Mobile users can toggle the hamburger menu

3. **Responsive Design**
   - Website works on desktop (1024px+), tablet (768px-1023px), and mobile (<768px)
   - All pages are mobile-friendly

## Color Palette

- **Primary Color**: Red (#EF4444)
- **Secondary Color**: Black (#1F2937)
- **Background**: White (#FFFFFF)
- **Text**: Dark Gray (#374151)
- **Accents**: Various gray shades for contrast

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Responsive Design**: Mobile-first approach
- **No Dependencies**: Static files only - no server required

## Customization Guide

### Change Colors
To customize colors, update the Tailwind CSS classes:
- Red: Change `red-600` to any other color (e.g., `blue-600`, `purple-600`)
- Black: Change `black` or `gray-900` to desired color
- Visit [Tailwind Color Reference](https://tailwindcss.com/docs/customizing-colors) for options

### Update Contact Information
Edit the following files with your actual contact details:
- `contact.html` - Contact form and information
- `footer` (in all files) - Footer contact links

### Add/Remove Courses
Edit `courses.html` to add, remove, or modify course cards

### Update Images/Icons
Currently using emoji for icons. Replace with actual images:
```html
<!-- Change from emoji -->
<div class="text-4xl mb-4">🎓</div>

<!-- To image -->
<img src="path/to/icon.png" alt="Icon" class="h-12 w-12 mb-4">
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
Resyvex-Institute-Website/
├── index.html          # Home page
├── courses.html        # Courses page
├── workshop.html       # Workshops page
├── guidance.html       # Career guidance page
├── placements.html     # Placements page
├── support.html        # Student support page
├── contact.html        # Contact page
├── terms.html          # Terms & conditions
├── privacy.html        # Privacy policy
└── README.md           # This file
```

## Future Enhancements

- Add a backend for form submissions
- Implement user authentication
- Add database for course catalog
- Create admin dashboard
- Add blog/news section
- Implement search functionality
- Add multi-language support

## Support

For any issues or questions, contact:
- **Email**: support@resyvex.com
- **Phone**: +91-XXXX-XXXX-XXX
- **Address**: 123 Tech Park, Innovation Drive, Silicon Valley, New Delhi - 110001, India

## License

© 2026 Resyvex Institute. All rights reserved.
