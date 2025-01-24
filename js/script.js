// Smooth Scrolling for Navigation Links

function enableSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const viewWorkButton = document.querySelector('#view-work-button');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1); // Remove the # from the href
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
    
    if (viewWorkButton) {
        viewWorkButton.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.getElementById('projects');

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    }
}
    

// Highlight active navigation link based on scroll position

function highlightActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const threshold = window.innerHeight * 0.4;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
    
        if (sectionTop < threshold && sectionTop > -sectionHeight + threshold) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach(link => {
                const isActive = link.getAttribute('href').slice(1) === sectionId;
                link.classList.toggle('active', isActive);
            });
        }
    });
}

// Dynamic greeting message in hero section

function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.querySelector('#dynamic-greeting');
    let greeting;

    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    if (greetingElement) {
        greetingElement.innerText = greeting;
    } else {
        console.error('Greeting element not found!');
    }
}

// Form Submission handling

function handleFormSubmission() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
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
    } else {
        console.error('Contact form not found!');
    }
}

// Initialize features

document.addEventListener('DOMContentLoaded', () => {
    enableSmoothScrolling();
    updateGreeting();
    handleFormSubmission();

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                highlightActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    });
});