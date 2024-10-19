document.addEventListener("DOMContentLoaded", function() {
    const accHeaders = document.querySelectorAll(".faq-item h3");
    accHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    document.getElementById("evaluacion-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let respuestasCorrectas = 0;

        if (document.getElementById("respuesta1").value.toLowerCase() === "recolección de requisitos") {
            respuestasCorrectas++;
        }
        if (document.getElementById("respuesta2").value.toLowerCase() === "recolección de requisitos, diseño, implementación, pruebas, mantenimiento") {
            respuestasCorrectas++;
        }

        alert(`Has respondido correctamente ${respuestasCorrectas} de 2 preguntas.`);
    });
});
