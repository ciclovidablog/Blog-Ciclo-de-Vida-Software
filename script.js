document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const comment = document.getElementById('comment').value;

    // Aquí puedes enviar el comentario a un servidor o correo
    alert('Comentario enviado: ' + comment);
});

document.getElementById('evaluationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Procesar la evaluación y enviar los resultados
    alert('Evaluación enviada. ¡Gracias por participar!');
});