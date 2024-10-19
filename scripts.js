// Función para enviar la evaluación
function enviarEvaluacion() {
    const respuesta1 = document.getElementById('pregunta1').value;
    const respuesta2 = document.getElementById('pregunta2').value;
    const respuesta3 = document.getElementById('pregunta3').value;
  
    let resultado = "Gracias por responder. Aquí están tus respuestas: \n";
    resultado += "1. " + respuesta1 + "\n";
    resultado += "2. " + respuesta2 + "\n";
    resultado += "3. " + respuesta3 + "\n";
  
    document.getElementById('resultado').textContent = resultado;
  }
  
  // Función para manejar el envío del formulario de contacto
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
  
    alert(`Gracias por contactarnos, ${nombre}. Te responderemos pronto al correo: ${email}`);
  });
  