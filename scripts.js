document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || mensaje === '') {
        e.preventDefault(); // Evita el envío del formulario
        alert('Por favor, completa todos los campos.');
    }
});
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Cambiar a Modo Oscuro';
document.body.insertBefore(toggleButton, document.body.firstChild);

let isDarkMode = false;
toggleButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#f5f5f5';
    document.body.style.color = isDarkMode ? '#fff' : '#333';
    toggleButton.innerText = isDarkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro';
});
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío normal del formulario
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && mensaje) {
        alert('Mensaje enviado con éxito. ¡Gracias por tu comentario!');
        form.reset(); // Limpia el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
