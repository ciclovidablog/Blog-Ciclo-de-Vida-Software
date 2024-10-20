document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

document.getElementById('submitQuiz').addEventListener('click', () => {
    const answers = {
        question1: 'b',
        question2: 'b',
        question3: 'b',
        question4: 'a',
        question5: 'b',
        question6: 'b',
        question7: 'a'
    };

    let score = 0;
    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }

    alert(`Tu puntaje es: ${score} de ${Object.keys(answers).length}`);
});
