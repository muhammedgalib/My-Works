document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,   
        once: true,      
        mirror: false,   
        offset: 100      
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullSrc = item.querySelector('img').getAttribute('data-full-src');
            const src = fullSrc || item.querySelector('img').getAttribute('src');
            
            lightboxImg.setAttribute('src', src);
            lightbox.classList.add('active');
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
             lightboxImg.setAttribute('src', ''); 
        }, 200);
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
