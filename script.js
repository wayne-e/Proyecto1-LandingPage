
const navInformacion = document.getElementById("navInformacion");
const navProductos = document.getElementById("navProductos");
const navIntereses = document.getElementById("navIntereses");
const cajaProducto = document.getElementById("clickProducto");
const cajaComentarios = document.getElementById("clickEnviado");
const btnEnviar = document.querySelector("#enviar");
const btnVaciar = document.querySelector("#vaciar");

//Esta sección permite cambiar el color de la seccion en la que esté en la navBar(Solo si hace Click)
navInformacion.addEventListener("click", function (e) {
    navInformacion.className="active";
    navIntereses.classList.remove('active');
    navProductos.classList.remove('active');
});


navProductos.addEventListener("click", function (e) {
    navProductos.className="active";
    navIntereses.classList.remove('active');
    navInformacion.classList.remove('active');
});


navIntereses.addEventListener("click", function (e) {
    navIntereses.className="active";
    navInformacion.classList.remove('active');
    navProductos.classList.remove('active');
});
////////////////////////////////////////////////////

//función cuando el usuario seleccione un producto (Ya que no es parte del objetivo, en este momento solo mostrará una ventana de InfoProduc)
function comprarProducto() {
    const texto = document.getElementById("textoMensaje");
    const texto2 = document.getElementById("parrafoMensaje");
    texto.innerText = "Instrumento Musical";
    texto2.innerText = "Información sobre el Producto";
    cajaProducto.click();

}

//Cuando el usuario envie los datos (Validados solo en el form), Abrirá un mensaje
btnEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    const texto = document.getElementById("textoMensaje");
    const texto2 = document.getElementById("parrafoMensaje");
    let nombre= document.getElementById("nombre");
    texto.innerText = "¡Gracias por tus Comentarios "+nombre.value+"!";
    texto2.innerText = "Enviaremos respuesta a tu correo muy pronto";
    cajaComentarios.click();
    btnVaciar.click();
});






