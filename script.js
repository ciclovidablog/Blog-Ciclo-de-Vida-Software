document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Evita que se envíe el formulario si hay campos vacíos
    } else {
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    }
});
