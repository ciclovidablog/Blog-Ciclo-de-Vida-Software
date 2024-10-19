// Acordeón
var acc = document.getElementsByClassName("accordion-btn");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Evaluación y Contacto - simulación de envío
document.getElementById("evaluacion-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Evaluación enviada. ¡Sigue aprendiendo!");
});

document.getElementById("contacto-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensaje enviado. ¡Gracias por contactarnos!");
});

  