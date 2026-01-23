/* ============================================
   DRAINCHECK NG - MAIN JAVASCRIPT
   Handles mobile menu, smooth scrolling, and animations
   ============================================ */

// ============================================
// MOBILE MENU TOGGLE
// Opens and closes the hamburger menu on mobile devices
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    // Check if elements exist (they might not on all pages)
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide menu
            navbarMenu.classList.toggle('active');
            
            // Animate hamburger icon to X
            this.classList.toggle('active');
        });
        
        // Close menu when clicking a link (for smooth UX)
        const menuLinks = navbarMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navbarMenu.contains(event.target);
            const isClickOnToggle = navbarToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    }
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// Provides smooth scroll behavior for internal page links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Only scroll if it's not just "#"
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// SCROLL-TRIGGERED FADE-IN ANIMATIONS
// Elements with class 'fade-in' animate when scrolled into view
// ============================================
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When element is in viewport, add 'visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        // Trigger when 20% of element is visible
        threshold: 0.2
    });
    
    // Observe all fade-in elements
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Run animation handler when DOM is loaded
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

// ============================================
// ACTIVE PAGE HIGHLIGHTING IN NAVBAR
// Highlights the current page in the navigation menu
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navbar links
    const navLinks = document.querySelectorAll('.navbar-menu a');
    
    // Loop through links and add 'active' class to matching page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ============================================
// FORM VALIDATION (if needed in the future)
// Placeholder for custom form validation logic
// ============================================
function validateForm(formElement) {
    // This function can be expanded if you add custom forms
    // For now, Google Forms handles validation
    return true;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit how often a function can run
 * Useful for scroll and resize event handlers
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 * Returns true if element is visible on screen
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// PERFORMANCE OPTIMIZATION
// Lazy load images when they come into viewport
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Get all images with data-src attribute (for lazy loading)
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
});

// ============================================
// CONSOLE MESSAGE
// Welcome message for developers who inspect the code
// ============================================
console.log('%c🌊 DrainCheck NG', 'color: #27AE60; font-size: 24px; font-weight: bold;');
console.log('%cYouth-Powered Flood Prevention Platform', 'color: #3498DB; font-size: 14px;');
console.log('%cBuilt by Chidera Promise Ugboaja, 16 years old', 'color: #666; font-size: 12px;');
console.log('%cInterested in the code? Check out the comments!', 'color: #F39C12; font-size: 12px;');