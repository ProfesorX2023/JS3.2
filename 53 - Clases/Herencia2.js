//clase Base
class Vehiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    obternerInformacion(){
        return `Vehículo: ${this.marca} - ${this.modelo}`
    }
}

//subclase que hereda de Vehículo
class Coche extends Vehiculo{
    constructor(marca, modelo, color){
        super(marca, modelo);
        this.color = color;
    }

    obternerInformacion(){
        //sobrescribir el método de la clase base
        return `${super.obternerInformacion()} de color ${this.color}`;
    }

    conducir(){
        return "Rummm, Rummm!";
    }

}

const miVehiculo = new Vehiculo("Toyota", "Camry");
const miCoche = new Coche("Honda","Civic","Rojo");

//utilizar los métodos con las instancias ya creadas

console.log(miVehiculo.obternerInformacion());
console.log(miCoche.obternerInformacion());
console.log(miCoche.conducir());