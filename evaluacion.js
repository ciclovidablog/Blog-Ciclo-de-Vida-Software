function evaluateQuiz() {
    let score = 0;
    
    // Pregunta 1
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "correct") {
        score++;
    }
    
    // Pregunta 2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "correct") {
        score++;
    }
    
    // Pregunta 3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "correct") {
        score++;
    }

    // Pregunta 4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "correct") {
        score++;
    }

    // Pregunta 5
    let q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === "correct") {
        score++;
    }

    // Pregunta 6
    let q6 = document.querySelector('input[name="q6"]:checked');
    if (q6 && q6.value === "correct") {
        score++;
    }

    // Pregunta 7
    let q7 = document.querySelector('input[name="q7"]:checked');
    if (q7 && q7.value === "correct") {
        score++;
    }

    // Pregunta 8
    let q8 = document.querySelector('input[name="q8"]:checked');
    if (q8 && q8.value === "correct") {
        score++;
    }

    // Total de preguntas
    const totalQuestions = 8;
    
    // Muestra el resultado
    document.getElementById("result").innerHTML = "Tu puntuación es " + score + " de " + totalQuestions;