"use strict";

//No me sale :(((

//Seleccionamos los elementos del HTML
const texto = document.getElementById("texto");
const apariciones = document.getElementById("apariciones");
const salida = document.getElementById("salida");

//Trabajamos con los eventos
apariciones.addEventListener("click", contadorPalabras);
