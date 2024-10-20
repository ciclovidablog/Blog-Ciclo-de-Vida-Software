// Función para suavizar el desplazamiento al hacer clic en los enlaces del menú
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Validación del formulario de comentarios
const commentForm = document.querySelector('form[action="mailto:tu_correo@example.com"]');
commentForm.addEventListener('submit', function (e) {
    const comentarioInput = document.getElementById('comentario');

    if (comentarioInput.value.trim() === '') {
        e.preventDefault(); // Evitar el envío del formulario
        alert('Por favor, ingresa un comentario antes de enviar.');
    } else {
        alert('Comentario enviado con éxito. ¡Gracias!');
    }
});

// Validación del formulario de evaluación
const evaluationForm = document.querySelector('form[action=""]'); // Asegúrate de que la acción sea la correcta
evaluationForm.addEventListener('submit', function (e) {
    alert('Resultados enviados. ¡Gracias por participar!');
});
