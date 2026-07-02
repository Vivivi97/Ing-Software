function saludar() {
    var numeroUno=5;
    var numeroDos=12;
    var suma=numeroUno+numeroDos;
    //console.log("El resultado de la suma es: "+suma);
    window.alert("El resultado de la suma es: " + suma);
} 

function formarOperacion(numero) {
    // Comentario mezclado en español e inglés
    var pantalla = document.getElementById("pantalla"); // This is a reference to HTML object
    var operacion = document.getElementById("pantalla").value; // This is the value in the object
    operacion += numero;
    pantalla.value = operacion;
}

function limpiarPantalla() {
    var pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}

function formarSuma() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    operacion += "+";
    pantalla.value = operacion;
}

function formarResta() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    operacion += "-";
    pantalla.value = operacion;
}

function formarMultiplicacion() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    operacion += "*";
    pantalla.value = operacion;
}

function formarDivision() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    operacion += "/";
    pantalla.value = operacion;
}

function calcularResultado() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    // Uso de eval que podría ser inseguro
    var result = Function('"use strict"; return (' + operacion + ')')();
    pantalla.value = result;
}