//VARIABLES
let selector = document.getElementById('miSelector');
let input = document.getElementById("miInput");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("miListado");

let archivo = 'peliculas.json';

//ESCUCHADORES
selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('cambiarModo', mensajeModo);
input.addEventListener('keydown', verificarInput);
boton.addEventListener('click', biscar) 

//FUNCIONES
function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambiarModo');
    selector.dispatchEvent(evento);
}

function memnsajeModo(){
    alert("El archivo de busqueda ahora es "+selector.value);
}

function verificarInput(evento){
    if((evento.keyCode<65 || evento.keyCode >90) && evento.keyCode !=32 && evento.keyCode !=8){
        evento.preventDefault;
    }
}

function buscar(){
    lista.innerHTML = "";

    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida){
        for(let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())){
                
            }
        }
    })
}