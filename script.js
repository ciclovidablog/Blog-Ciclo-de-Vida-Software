document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    alert('Mensaje enviado. Nos pondremos en contacto pronto.');
    this.reset(); // Reiniciar el formulario
});
