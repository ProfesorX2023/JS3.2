function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automivil1 = new Automovil('Ford','Focus','Rojo',2015,'Matías Pérez');
let automovil2 = new Automovil('Chevrolet','Camaro','Amarillo',2018,'Silvina Márquez');
let automivil3 = new Automovil('Toyota','Corolla','Blanco',2012,'Carlos García');
let automoviles = [automivil1, automovil2, automivil3];

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function(){
    alert("El automovil fue encendido");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`;
}

function mostrarAutomoviles(){
    let lista = document.getElementById("listaAutomoviles");
    for(let automovil of automoviles){
        let item = document.createElement('li');
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}