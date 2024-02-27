let empleados = []

function Empleado(legajo,apellido, nacimiento, cargo, nombre){
    this.legajo = legajo;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
    this.nombre = nombre;
}

function agregarEmpleado(){
    let legajo = document.getElementById("txtLegajo").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtNacimiento").value;
    let cargo = document.getElementById("txtCargo").value;

    let empleado = new Empleado(legajo,nombre,apellido,nacimiento,cargo);
    empleados.push(empleado)

    alert("Empleado ha sido Generado");

    limpiarCampos();

}

function mostrarEmpleados(){
    let listado = '';
    for(empleado of empleados){
        for(let prop in empleado){
            listado = listado + prop.toUpperCase() + " : " + empleado[prop] + ", "
        }
        listado = listado + "\n";
    }
    alert(listado)
}

function limpiarCampos(){
    document.getElementById("txtLegajo").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtNacimiento").value = "";
    document.getElementById("txtCargo").value = "";
}