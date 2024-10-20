document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    let score = 0;
    const answers = {
        q1: 'a',
        q2: 'a',
        // Agregar respuestas correctas para más preguntas
    };

    for (const question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    alert(`Tu puntuación es: ${score}`);
});