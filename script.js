// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--bg-primary)';
        navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'var(--bg-primary)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (hamburger && navLinks && !hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking
            if (navLinks) {
                navLinks.classList.remove('active');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        }
    });
});

// Handle "View My Work" and "Contact Me" button clicks
const primaryBtn = document.querySelector('.btn-primary');
const secondaryBtn = document.querySelector('.btn-secondary');

if (primaryBtn) {
    primaryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
}

if (secondaryBtn) {
    secondaryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
});

// Live typing effect for greeting text
const typingText = "Adapala Naga Balaji";
const typingElement = document.getElementById('typing-text');
let index = 0;

function type() {
    if (index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}

function typeText(text, element, delay = 150, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

window.addEventListener('DOMContentLoaded', () => {
    const typingElement1 = document.getElementById('typing-text-1');
    const typingElement2 = document.getElementById('typing-text-2');
    typingElement1.textContent = '';
    typingElement2.textContent = '';
    // Start typing both texts simultaneously with faster speed
    typeText("Hi, I'm Adapala Naga Balaji", typingElement1, 75);
    typeText("Crafting Intelligence into Code", typingElement2, 75);
});
