// Desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar/Ocultar el menú lateral
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('aside');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Validación del formulario de contacto
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || mensaje === '') {
        e.preventDefault();
        alert('Por favor, complete todos los campos.');
    }
});

// Temas oscuros y claros
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Guarda la preferencia del usuario
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Aplica el tema guardado al cargar la página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Contador de palabras en el formulario de contacto
const messageInput = document.getElementById('mensaje');
const wordCountDisplay = document.createElement('div');
messageInput.parentNode.insertBefore(wordCountDisplay, messageInput.nextSibling);

messageInput.addEventListener('input', () => {
    const wordCount = messageInput.value.split(/\s+/).filter(word => word.length > 0).length;
    wordCountDisplay.textContent = `Palabras: ${wordCount}`;
});
