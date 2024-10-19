window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.container');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('appear');
        }
    });
});
