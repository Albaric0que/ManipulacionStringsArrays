"use strict";

function esPalindromo() {
  const re = /[\W_]/g;
  const textoValor = texto.value;
  const textoLimpio = textoValor.replace(re, "").toLowerCase();
  const textoInv = textoLimpio.split("").reverse().join("");

  if (textoLimpio === textoInv) {
    salida.innerHTML = "Es un palíndromo";
  } else {
    salida.innerHTML = "No es un palíndromo";
  }
}
