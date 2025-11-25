/**
 * FOKKUS PARTNER DECK - NAVIGATION SCRIPT
 * Handles slide navigation and keyboard controls
 */

// Slide state
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-container');
const totalSlides = slides.length;

/**
 * Display a specific slide by index
 * @param {number} index - The slide index to display
 */
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });

    // Show the active slide
    const activeSlide = slides[index];
    activeSlide.style.display = 'flex';

    // Trigger reflow to restart animations
    void activeSlide.offsetWidth;

    // Add active class with slight delay for animation
    setTimeout(() => {
        activeSlide.classList.add('active');
    }, 10);
}

/**
 * Navigate to the next slide
 */
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

/**
 * Navigate to the previous slide
 */
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize: Show first slide on page load
showSlide(0);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Prevent spacebar from scrolling
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    }
});
