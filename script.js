document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                this.textContent = 'Más Información';
            } else {
                content.style.display = 'block';
                this.textContent = 'Menos Información';
            }
        });
    });

    const quiz = document.getElementById('quiz');
    quiz.addEventListener('submit', function(event) {
        event.preventDefault();
        let score = 0;
        const answers = {
            q1: 'Comunicación',
            q2: 'Requisitos',
            q3: 'Detección de errores',
            q4: 'Interfaz de usuario',
            q5: 'Software'
        };

        for (const question in answers) {
            const selected = quiz.querySelector(`input[name="${question}"]:checked`);
            if (selected && selected.value === answers[question]) {
                score++;
            }
        }

        alert(`Tu puntuación: ${score} de ${Object.keys(answers).length}`);
    });
});
