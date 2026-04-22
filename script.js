// ==========================================
// 1. Smooth Scrolling for Navigation Links
// ==========================================
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// 2. Sticky Navigation Header on Scroll
// ==========================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    // Add a 'scrolled' class to the header when scrolled down 50px
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==========================================
// 3. Lightbox Gallery Functionality
// ==========================================
// Create the lightbox container dynamically
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Select all images that should trigger the lightbox
const galleryImages = document.querySelectorAll('.lightbox-trigger');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Show the lightbox
        lightbox.classList.add('active');
        
        // Create an image tag inside the lightbox
        const img = document.createElement('img');
        img.src = image.src;
        
        // Clear any existing images in the lightbox, then add the new one
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
        
        // Prevent scrolling on the body while lightbox is open
        document.body.style.overflow = 'hidden';
    });
});

// Close the lightbox when clicking anywhere on the dark background
lightbox.addEventListener('click', e => {
    // Only close if clicking the background, not the image itself
    if (e.target === e.currentTarget) {
        lightbox.classList.remove('active');
        // Restore page scrolling
        document.body.style.overflow = 'auto';
    }
});
