// Manejo de barra de progreso
window.onscroll = function() {updateProgressBar()};

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}

// Acordeones
var acc = document.getElementsByClassName("accordion-btn");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Evaluación
document.getElementById("evaluacion-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let respuestasCorrectas = 0;
    
    if (document.getElementById("respuesta1").value.toLowerCase() === "recolección de requisitos") {
        respuestasCorrectas++;
    }
    
    if (document.getElementById("respuesta2").value.toLowerCase().includes("fases")) {
        respuestasCorrectas++;
    }

    if (respuestasCorrectas === 2) {
        alert("¡Excelente trabajo! Has respondido correctamente. Sigue adelante.");
    } else {
        alert("Has respondido correctamente a " + respuestasCorrectas + " preguntas. ¡Intenta mejorar!");
    }
});

  