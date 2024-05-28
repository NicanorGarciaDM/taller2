var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("boton");

console.log(input_submit);

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();

    var valor_nombre = input_nombre.value;

    var mensaje = "¡Hola " + valor_nombre + "! Gracias por suscribirte a nuestra newsletter personalizada. Estamos emocionados de compartir contenido que se adapte a tus gustos.";

    alert(mensaje);
}