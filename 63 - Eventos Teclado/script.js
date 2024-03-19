let campo = document.getElementById("miCampo");

function verificarNumero(event){
    if(event.KeyCode < 48 || event.KeyCode > 57){
        event.preventDefault();
    };
};

campo.addEventListener('keydown', verificarNumero);

campo.addEventListener('keyup', function(event){
    console.log("Entrada del usurario: " + event.target.value);
});

campo.addEventListener('keypress', function(event){
    console.log("Caracter ingresado: " + event.key);
})