//Definir una clase base
class Animal{
    constructor(nombre){
        this.nombre = nombre
    }

    saludar(){
        return `Hola, soy ${this.nombre}`;
    }
}

//Definir una sublclase que hereda de Animal
class Perro extends Animal{
    constructor(nombre, raza){
        //llamar al constructor de la clase base
        super(nombre);
        this.raza = raza;
    }

    ladrar(){
        return "Guau!, Guau!"
    }

}

//Crear Instancias de la clase
const miAnimal = new Animal("Criatura");
const miPerro = new Perro("Buddy","Labrador");

//Usar los métodos
console.log(miAnimal.saludar());

console.log(miPerro.saludar());

console.log(miPerro.ladrar());