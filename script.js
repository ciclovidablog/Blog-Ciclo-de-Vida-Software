document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });
    
    containers.forEach(container => {
        observer.observe(container);
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
