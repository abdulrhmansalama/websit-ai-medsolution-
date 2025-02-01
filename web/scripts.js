// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Card Animation on Scroll
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', checkCards);

function checkCards() {
    const triggerBottom = window.innerHeight * 0.9;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if(cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
}