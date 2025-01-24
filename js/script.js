// Smooth Scrolling for Navigation Links

function enableSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1); // Remove the # from the href
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behaviour: 'smooth',
                    block: 'start'
                });
            }
        });
    });        
}
    

// Highlight active navigation link based on scroll position

function highlightActiveNav() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
    
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
    
            if (sectionTop < window.innerHeight / 2 && sectionTop > -sectionHeight / 2) {
                const sectionId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Dynamic greeting message in hero section

function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.querySelector('#dynamic-greeting');
    let greeting;

    if (hour < 12) {
        greeting = 'Good Morning, Welcome to my portfolio!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon, Explore my journey!';
    } else {
        greeting = 'Good Evening, Dive into my work!';
    }

    greetingElement.innerText = greeting;
}

// Form Submission handling

function handleFormSubmission() {
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert (`Thank you for reaching out, ${name}! I'll get back to you shortly.`);
            contactForm.reset();
        } else {
            alert ('Please fill out all the fields before submitting.');
        }
    });
}

// Initialize features

document.addEventListener('DOMContentLoaded', () => {
    enableSmoothScrolling();
    highlightActiveNav();
    updateGreeting();
    handleFormSubmission();
});

