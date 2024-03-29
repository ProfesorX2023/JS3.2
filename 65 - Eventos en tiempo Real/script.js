let socket = new WebSocket('ws://localhost:8080');
let mensajeIngresado = document.getElementById('mensajeIngresado');
let botonEnviar = document.getElementById('botonEnviar');

function mostrarMensaje(contenido){
    let contedorMensajes = document.getElementById('mensajeChat');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    contedorMensajes.appendChild(elementoMensaje);
};

botonEnviar.onclick = function(){
    let mensaje = mensajeIngresado.value;
    mostrarMensaje(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function(event){
    let mensaje = event.data;
    mostrarMensaje(mensaje);
}