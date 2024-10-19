document.addEventListener("DOMContentLoaded", function() {
  const accHeaders = document.querySelectorAll(".accordion h3");
  accHeaders.forEach(header => {
      header.addEventListener("click", function() {
          const content = this.nextElementSibling;
          content.style.display = content.style.display === "block" ? "none" : "block";
      });
  });

  const faqHeaders = document.querySelectorAll("#faq h3");
  faqHeaders.forEach(header => {
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

      if (document.getElementById("respuesta2").value.toLowerCase().includes("fases")) {
          respuestasCorrectas++;
      }

      if (respuestasCorrectas === 2) {
          alert("¡Excelente trabajo! Has respondido correctamente. Sigue adelante.");
      } else {
          alert("Has respondido correctamente a " + respuestasCorrectas + " preguntas. ¡Intenta mejorar!");
      }
  });
});
