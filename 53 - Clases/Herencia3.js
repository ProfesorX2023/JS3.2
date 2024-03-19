//Clase base
class Figura{
    constructor(nombre){
        this.nombre = nombre;
    }

    obtenerNombre(){
        return `Figura: ${this.nombre}`
    }

    calcularArea(){
        return `Area no definida`
    }
}


//Subclase que hereda de figura
class Circulo extends Figura{
    constructor(nombre, radio){
        super(nombre);
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio **2;
    }
}

const miFigura = new Figura("Forma Abstracta")
const miCirculo = new Circulo("Circulo",5);

//usar los métodos
console.log(miFigura.obtenerNombre());
console.log(miFigura.calcularArea());
console.log(miCirculo.obtenerNombre());
console.log(miCirculo.calcularArea());