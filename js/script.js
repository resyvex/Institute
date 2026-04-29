// ========================================
// Resyvex Institute - Main JavaScript
// ========================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      if (hamburger) {
        hamburger.classList.remove('active');
      }
    });
  });

  // Set active navigation link based on current page
  setActiveNav();

  // Form validation for contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      validateAndSubmitForm(this);
    });
  }

  // Initialize scroll animations
  initScrollAnimations();

  // Add animations to elements with data attributes
  initDataAttributeAnimations();

  // Initialize WhatsApp Widget
  initWhatsAppWidget();
});

// Initialize scroll-triggered animations using Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate cards
        if (entry.target.classList.contains('card') && !entry.target.classList.contains('animate-fadeInUp')) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.style.opacity = '1';
        }

        // Animate feature items
        if (entry.target.classList.contains('feature-item') && !entry.target.classList.contains('animate-slideInFromLeft')) {
          entry.target.classList.add('animate-slideInFromLeft');
          entry.target.style.opacity = '1';
        }

        // Animate course/workshop items
        if ((entry.target.classList.contains('course-item') || entry.target.classList.contains('workshop-item')) && !entry.target.classList.contains('animate-slideInFromLeft')) {
          entry.target.classList.add('animate-slideInFromLeft');
          entry.target.style.opacity = '1';
        }

        // Animate stat boxes
        if (entry.target.classList.contains('stat-box') && !entry.target.classList.contains('animate-popIn')) {
          entry.target.classList.add('animate-popIn');
          entry.target.style.opacity = '1';
        }

        // Animate section titles
        if (entry.target.classList.contains('section-title') && !entry.target.classList.contains('animate-fadeInDown')) {
          entry.target.classList.add('animate-fadeInDown');
        }

        // Animate section subtitles
        if (entry.target.classList.contains('section-subtitle') && !entry.target.classList.contains('animate-fadeInUp')) {
          entry.target.classList.add('animate-fadeInUp');
        }
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll('.card, .feature-item, .course-item, .workshop-item, .stat-box, .section-title, .section-subtitle');
  animatableElements.forEach(element => observer.observe(element));
}

// Handle data-animate attribute for custom animations
function initDataAttributeAnimations() {
  const animatableElements = document.querySelectorAll('[data-animate]');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animationType = entry.target.getAttribute('data-animate');
        const animationDelay = entry.target.getAttribute('data-delay') || '0s';
        
        entry.target.classList.add(`animate-${animationType}`);
        entry.target.style.animationDelay = animationDelay;
        entry.target.style.opacity = '1';
      }
    });
  }, observerOptions);

  animatableElements.forEach(element => observer.observe(element));
}

// Set active navigation link
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Contact Form Validation
function validateAndSubmitForm(form) {
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const phone = form.querySelector('input[name="phone"]').value.trim();
  const subject = form.querySelector('input[name="subject"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !phone || !subject || !message) {
    alert('Please fill in all fields');
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  // Phone validation (basic)
  const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number');
    return false;
  }

  // If validation passes, submit the form to Google Apps Script
  const iframe = document.querySelector('iframe[name="hidden_iframe"]');
  if (iframe) {
    iframe.onload = function() {
      showNotification('Thank you! Your message has been received. We will contact you soon.', 'success');
      form.reset();
    };
  }
  
  form.submit();
  return false;
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  const styles = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 2rem;
    background-color: ${type === 'success' ? '#28a745' : '#E63946'};
    color: white;
    border-radius: 8px;
    z-index: 10000;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.3s ease;
  `;
  
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '1rem 2rem',
    backgroundColor: type === 'success' ? '#28a745' : '#E63946',
    color: 'white',
    borderRadius: '8px',
    zIndex: '10000',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  });
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ========================================
// WhatsApp Widget Initialization
// ========================================

function initWhatsAppWidget() {
  // WhatsApp Phone Number (India format: +91 9003041889)
  const whatsappNumber = '+919003041889';
  const whatsappMessage = encodeURIComponent('Hello! I am interested in learning more about Resyvex Institute courses and services.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // Create WhatsApp widget container
  const whatsappWidget = document.createElement('div');
  whatsappWidget.className = 'whatsapp-widget';
  
  // Create WhatsApp button
  const whatsappButton = document.createElement('a');
  whatsappButton.href = whatsappLink;
  whatsappButton.className = 'whatsapp-button';
  whatsappButton.target = '_blank';
  whatsappButton.rel = 'noopener noreferrer';
  whatsappButton.title = 'Contact us on WhatsApp';
  whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
  
  // Create tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'whatsapp-tooltip';
  tooltip.textContent = 'Chat with us on WhatsApp!';
  
  // Append tooltip to button
  whatsappButton.appendChild(tooltip);
  
  // Append button to widget
  whatsappWidget.appendChild(whatsappButton);
  
  // Append widget to body
  document.body.appendChild(whatsappWidget);
}
