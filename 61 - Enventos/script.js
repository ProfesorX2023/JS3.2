let boton = document.getElementById("miBoton");

function mostrarMensaje(){
    alert("El boton ha sido presionado");
}

function mouseEncima(){
    
    boton.style.backgroundColor = "#FF0000";
}

function mouseFuera(){
    
    boton.style.backgroundColor = "#FFFFFF";
}
boton.addEventListener('click',mostrarMensaje);
boton.addEventListener('mouseover', mouseEncima);
boton.addEventListener('mouseout', mouseFuera);