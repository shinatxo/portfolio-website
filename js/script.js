// Smooth Scrolling for Navigation Links

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // Remove the # from the href
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({behaviour: 'smooth'});
        }
    });
});

// Highlight active navigation link based on scroll position

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