document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
    
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;
  
      if (!nombre || !email || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return;
      }
  
      
      enviarFormulario(nombre, email, mensaje);
    });
  
    function enviarFormulario(nombre, email, mensaje) {
      
      emailjs.send("your_service_id", "your_template_id", {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
      }).then(
        function (response) {
          alert("El formulario se ha enviado con éxito.");
          contactForm.reset();
        },
        function (error) {
          alert("Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.");
        }
      );
    }
  });